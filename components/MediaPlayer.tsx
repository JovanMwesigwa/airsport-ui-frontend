import React from "react";
import ReactPlayer from "react-player";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

interface Props {
  data: any;
}

export const MediaPlayer: React.FC<Props> = ({ data }) => {
  // const { isLoading, isError, data: item } = data;

  // if (isError || !item) return <div>Error</div>;
  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="relative w-full">
      <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
      >
        <source src="video.mp4" type="video/mp4" />
        {/* <source src={item.event_media} type="video/mp4" /> */}
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-[#00021C] flex flex-1 flex-col items-center justify-between">
        <div className="flex items-center justify-center flex-1 ">
          <Link
            // href={{
            //   pathname: "/watch",
            //   query: {
            //     vid: item.id,
            //   },
            // }}
            href="/"
          >
            <div className="bg-[#D00265] mt-10 flex-1 text-white  flex cursor-pointer hover:bg-white hover:text-[#D00265] items-center justify-center rounded-full w-16 h-16">
              <BsFillPlayFill size={55} />
            </div>
          </Link>
        </div>
        <div className="p-4 md:p-8">
          {/* <p className="font-light text-white">{item?.category?.name}</p>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {item?.title}{" "}
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;

// <ReactPlayer
//   url="/video2.mp4"
//   height="100%"
//   width="100%"
//   className="absolute top-0 left-0 right-0 "
//   controls={false}
//   muted={true}
//   playing
//   fluid={true}
//   loop
//   style={{ objectFit: "cover", height: "100%", width: "100%" }}
// />
