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

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const CropImage = ({ imageSrc,hideCropper }: { imageSrc: any ,hideCropper:()=>void}) => {
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
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

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

  useEffect(()=>{
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      setImgSrc(reader.result?.toString() || "")
    );
    reader.readAsDataURL(imgSrc);
  },[])

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
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

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else if (imgRef.current) {
      const { width, height } = imgRef.current;
      setAspect(16 / 9);
      const newCrop = centerAspectCrop(width, height, 16 / 9);
      setCrop(newCrop);
      // Updates the preview
      setCompletedCrop(convertToPixelCrop(newCrop, width, height));
    }
  }

  return (
    <>
      <div
        className="w-full min-h-[100vh] flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="bg-white p-6 w-[80%] flex flex-col md:w-1/3 rounded-xl">
          <div className="w-full text-center my-2 font-semibold">
            Crop your photo
          </div>
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
                src={imgSrc}
                style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          )}

          <div className="w-full flex items-center justify-between mt-3 p-4">
            <button onClick={hideCropper} className="text-[#1b66c8] hover:shadow w-1/2 border text-sm py-2 px-6 rounded">
              Cancel
            </button>
            <button className="bg-[#1b66c8] hover:shadow w-1/2 ms-6 text-white text-sm py-2 px-6 rounded">
              Finish
            </button>
          </div>
        </div>
      </div>
{/* 
      <div className="App">
        <div className="Crop-Controls">
          <input type="file" accept="image/*" onChange={onSelectFile} />
          <div>
            <label htmlFor="scale-input">Scale: </label>
            <input
              id="scale-input"
              type="number"
              step="0.1"
              value={scale}
              disabled={!imgSrc}
              onChange={(e) => setScale(Number(e.target.value))}
            />
          </div>
        </div> */}
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
              src={imgSrc}
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        {!!completedCrop && (
          <>
            <div>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: "1px solid black",
                  objectFit: "contain",
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            </div>
            <div>
              <button onClick={onDownloadCropClick}>Download Crop</button>
              <a
                ref={hiddenAnchorRef}
                download
                style={{
                  position: "absolute",
                  top: "-200vh",
                  visibility: "hidden",
                }}
              >
                Hidden download
              </a>
            </div>
          </>
        )}
      
    </>
  );
};

export default CropImage;
