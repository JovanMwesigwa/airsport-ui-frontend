import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

interface Props {
  dark?: boolean;
  fullLayout?: boolean;
  nowPlaying?: boolean;
  show?: boolean;
}

const Navbar: React.FC<Props> = ({ dark, fullLayout, nowPlaying, show }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  if (fullLayout) return null;

  return (
    <>
      <nav
        className={`flex flex-row w-full justify-between px-3 md:px-9 h-20 items-center top-0 left-0 right-0 fixed z-20 ${
          show ? "bg-[#00021C]" : "bg-transparent"
        } transition-all`}
      >
        <Link href="/">
          <div className="flex flex-1 cursor-pointer">
            <Image src="/logofull.png" height={40} width={100} />
          </div>
        </Link>
        <div className="hidden md:flex justify-evenly items-center">
          <ul className="flex flex-row bg-black text-white font-medium opacity-60 p-2 px-8 rounded-full mr-9 border-[1px] text-sm border-white">
            <li className="pr-8 cursor-pointer">Live</li>
            <li className="pr-8 cursor-pointer">Movies</li>
            <li className="pr-8 cursor-pointer">Shows</li>
            <li>Events</li>
          </ul>
          {nowPlaying ? (
            <div className="bg-[#D00265] text-white px-6 py-2 rounded-full text-base">
              Live
            </div>
          ) : (
            <Link href="/watch">
              <button className="bg-[#D00265] text-white px-6 py-2 rounded-full text-base">
                watch now
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden" onClick={() => setOpenNav(true)}>
          <FaBars color="#fff" size={22} />
        </div>
      </nav>
      <div
        className={`${
          openNav ? "flex" : "hidden"
        } h-full w-full top-0 left-0 right-0 fixed z-20 bg-[#00021C] p-5 py-10 justify-center `}
      >
        <div
          className="absolute right-6 cursor-pointer"
          onClick={() => setOpenNav(false)}
        >
          <AiOutlineClose color="#fff" size={22} />
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <ul className="flex flex-col text-white font-medium text-xl">
            <li className="pr-8 cursor-pointer my-4 text-center text-2xl">
              Live
            </li>
            <li className="pr-8 cursor-pointer my-4 text-center text-2xl">
              Movies
            </li>
            <li className="pr-8 cursor-pointer my-4 text-center text-2xl">
              Shows
            </li>
            <li className="pr-8 cursor-pointer my-4 text-center text-2xl">
              Events
            </li>
          </ul>
          {nowPlaying ? (
            <div className="bg-[#D00265] text-white px-6 py-3 my-4 rounded-full text-2xl">
              Live
            </div>
          ) : (
            <Link href="/watch">
              <button className="bg-[#D00265] text-white px-6 py-3 rounded-full text-2xl">
                watch now
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
