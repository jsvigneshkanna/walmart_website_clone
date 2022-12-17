import Image from "next/image";
import { BsFillFileSpreadsheetFill, BsPerson } from "react-icons/bs";
import { MdOutlineBubbleChart } from "react-icons/md";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { FcTwoSmartphones } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className=" bg-blue-600/90 text-white">
      {/* Top content */}
      <div className="py-3 border-b-[1px] flex gap-2 items-center px-10 justify-between">
        {/* LOGO */}
        <div className="flex gap-5">
          <Image
            src="/walmart_logo_transparent.png"
            alt="logo"
            width={160}
            height={160}
            className="hover:bg-slate-800/40 p-2 rounded-3xl"
          />

          <div className="flex gap-1">
            {/* DEPARTMENTS */}
            <div className="flex gap-2 justify-center items-center hover:bg-slate-800/40 p-3 rounded-3xl cursor-pointer">
              <BsFillFileSpreadsheetFill size={18} />
              <p className=" capitalize font-semibold">departments</p>
            </div>

            {/* SERVICES */}
            <div className="flex gap-2 justify-center items-center hover:bg-slate-800/40 p-3 rounded-3xl cursor-pointer">
              <MdOutlineBubbleChart size={18} />
              <p className=" capitalize font-semibold">services</p>
            </div>
          </div>
        </div>

        {/* SEARCH INPUT */}
        <label htmlFor="search-walmart" className="relative">
          <AiOutlineSearch
            className="pointer-events-none w-7 h-7 absolute top-1/2 transform
           -translate-y-1/2 right-1 bg-yellow-400 rounded-full p-1 text-black/70"
          />
          <input
            type="text"
            className=" rounded-3xl text-base py-2 text-black px-2 ring-0 focus:border-0 w-[620px] monitor:w-[920px]"
            placeholder="Search Walmart"
            id="search-walmart"
          />
        </label>

        <div className="flex gap-8">
          {/* MY ITEMS */}
          <div className="flex gap-3 justify-center items-center">
            <AiOutlineHeart />
            <div>
              <p className=" text-xs font-semibold">Reorder</p>
              <p className="font-bold">My Items</p>
            </div>
          </div>

          {/* SIGN IN */}
          <div className="flex gap-3 justify-center items-center">
            <BsPerson />
            <div>
              <p className=" text-xs font-semibold">Sign In</p>
              <p className="font-bold">Account</p>
            </div>
          </div>

          {/* SIGN IN */}
          <div className="flex flex-col gap-1 justify-center items-center">
            <CgShoppingCart />
            <div>
              <p className=" text-xs font-semibold">$ 0.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div className="py-2">
        <FcTwoSmartphones />
      </div>
    </div>
  );
};

export default Navbar;
