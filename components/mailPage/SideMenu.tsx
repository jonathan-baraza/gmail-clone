import {useState} from "react";
import {
  HiPencil,
  HiInbox,
  HiOutlineStar,
  HiOutlineDocument,
} from "react-icons/hi";
import { WiTime4 } from "react-icons/wi";
import {
  MdLabelImportantOutline,
  MdLabelOutline,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { GrDocument } from "react-icons/gr";

const SideMenu = () => {
  const [categoriesShown,setCategoriesShown]=useState<boolean>(false);
  return (
    <div className="w-[18%] h-full ">
      <div className=" pt-4">
        <div className="ml-5 flex items-center space-x-2">
          <img src={"/gmail.svg"} className="h-[35px]" />
          <span className=" text-gray-700 text-2xl">Gmail</span>
        </div>

        <div className=" pl-3 mt-6 ">
          <div className="bg-[#c2e7ff] flex items-center justify-around p-[14px] rounded-2xl w-[55%] hover:cursor-pointer hover:shadow-lg">
            <HiPencil size={23} />
            <span className="text-[16px]">Compose</span>
          </div>

          {/* Make Reusable */}
          <div className="flex items-center justify-between px-2 bg-[#d3e3fd] hover:cursor-pointer mt-4 rounded-3xl px-4 py-[6px] text-[#041e49]">
            <span className="flex items-center">
              <HiInbox className="" size={21} />
              <span className="ml-3 text-[14px] font-bold">Inbox</span>
            </span>
            <span className="text-xs font-semibold">746</span>
          </div>
          {/* Starred */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <HiOutlineStar className="" size={20} />
              <span className="ml-3 text-[14px]">Starred</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Snoozed */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <WiTime4 className="" size={20} />
              <span className="ml-3 text-[14px]">Snoozed</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Important */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <MdLabelImportantOutline className="" size={20} />
              <span className="ml-3 text-[14px]">Important</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Sent */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <VscSend className="" size={20} />
              <span className="ml-3 text-[14px]">Sent</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Drafts */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <HiOutlineDocument className="" size={20} />
              <span className="ml-3 text-[14px]">Drafts</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Categories */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <MdLabelOutline className="" size={20} />

              <span className="ml-3 text-[14px] font-bold">Categories</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Categories toggle */}
          {/* Social */}
          <div className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]">
            <span className="flex items-center">
              <HiOutlineDocument className="" size={20} />
              <span className="ml-3 text-[14px]">Drafts</span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
          {/* Show more */}
          <div
            onClick={() => setCategoriesShown(!categoriesShown)}
            className="flex items-center hover:bg-[#eaebef] justify-between px-2 hover:cursor-pointer  rounded-3xl px-4 py-[6px] text-[#444746]"
          >
            <span className="flex items-center">
              {!categoriesShown ? (
                <MdOutlineExpandMore className="" size={20} />
              ) : (
                <MdOutlineExpandLess className="" size={20} />
              )}
              <span className="ml-3 text-[14px] ">
                {!categoriesShown ? "More" : "Less"}
              </span>
            </span>
            <span className="text-xs font-semibold"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

//icons in order