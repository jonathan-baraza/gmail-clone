"use client";
import { useState, useRef, useEffect } from "react";
import ReactCrop, {
  type Crop,
  centerCrop,
  makeAspectCrop,
  PixelCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";
import { IoMdPhotos } from "react-icons/io";
import LineLoader from "../loaders/LineLoader";
import { auth, storage,database } from "@/config/firebase";
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import {  ref as DbRef,update } from "firebase/database";
import { toast } from "react-toastify";
import { Console } from "console";

// function centerAspectCrop(
//   mediaWidth: number,
//   mediaHeight: number,
//   aspect: number
// ) {
//   return centerCrop(
//     makeAspectCrop(
//       {
//         unit: "%",
//         width: 50,
//         height:50,
//       },
//       aspect,
//       mediaWidth,
//       mediaHeight
//     ),
//     mediaWidth,
//     mediaHeight
//   );
// }

const CropImage = ({
  imageSrc,
  hideCropper,
  refetchUserProfile
}: {
  imageSrc: any;
  hideCropper: () => void;
  refetchUserProfile:()=>void;
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const [imgSrc, setImgSrc] = useState(imageSrc);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  // function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setCrop(undefined); //+ Makes crop preview update between images.
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () =>
  //       setImgSrc(reader.result?.toString() || "")
  //     );
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // }

  useEffect(() => {
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      setImgSrc(reader.result?.toString() || "")
    );
    reader.readAsDataURL(imgSrc);
  }, []);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      // setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        console.log("completed crop here");
        console.log(completedCrop);
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  const handleUpdate = async () => {
    setLoading(true);
    if (previewCanvasRef.current) {
      try {
        //get blob from canvas
        const dataURL = previewCanvasRef.current?.toDataURL();
        const blob = await fetch(dataURL).then((response) => response.blob());

        //storage bucket references i.e. 'userid.jpg'
        const storageRef = ref(
          storage,
          "profiles/" + auth.currentUser?.uid + ".jpg"
        );

        //upload photo
        uploadBytes(storageRef, blob);

        //get download URL
        const downloadURL=await getDownloadURL(storageRef);

        //update profile with download url
         await update(DbRef(database, "/users/" + auth.currentUser?.uid), {
           photo:downloadURL,
         });
        toast.success("Profile photo updated successfully");
        refetchUserProfile();
        hideCropper();
      } catch (error) {
        setLoading(false);
        let errorMessage;
        if (error instanceof Error) {
          errorMessage = error.message;
        } else {
          errorMessage = "Something went wrong, try again later";
        }
        hideCropper();
        toast.error(errorMessage);
      }
    }
  };

  const getImageFromCanvas = async () => {};

  // function handleToggleAspectClick() {
  //   if (aspect) {
  //     setAspect(undefined);
  //   } else if (imgRef.current) {
  //     const { width, height } = imgRef.current;
  //     setAspect(16 / 9);
  //     const newCrop = centerAspectCrop(width, height, 16 / 9);
  //     setCrop(newCrop);
  //     // Updates the preview
  //     setCompletedCrop(convertToPixelCrop(newCrop, width, height));
  //   }
  // }

  return (
    <>
      <div
        className="w-full min-h-[100vh] flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div
          className="bg-white relative p-6 w-[80%] flex flex-col md:w-[50%] 
        rounded-xl"
        >
          {loading && <LineLoader overlay={true} />}
          <div className="w-full text-center mt-4 mb-6 font-semibold">
            Crop your photo
          </div>

          <div className="w-full flex">
            <div className="w-1/2">
              {!!imgSrc && (
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspect}
                >
                  <img
                    ref={imgRef}
                    alt="Crop me"
                    className={``}
                    src={imgSrc}
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              )}
            </div>
            <div className="w-1/2">
              {!!completedCrop ? (
                <>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full text-center font-semibold text-sm mb-4">
                      Your crop preview
                    </div>
                    <canvas
                      ref={previewCanvasRef}
                      id="canvasPreview"
                      className=""
                      style={{
                        objectFit: "contain",
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="w-full text-center text-gray-500 text-sm">
                      Your preview will appear here
                    </div>
                    <IoMdPhotos className="m-6" size={100} color="gray" />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-3 p-4">
            <button
              onClick={hideCropper}
              className="text-[#1b66c8] hover:shadow w-1/2 border text-sm py-2 px-6 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-[#1b66c8] hover:shadow w-1/2 ms-6 text-white text-sm py-2 px-6 rounded"
            >
              Update photo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropImage;
