import React from "react";
import ReactPlayer from "react-player";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

interface Props {
  setNowPlaying: any;
  show?: boolean;
  videoData?: string;
}

export const MainPlayer: React.FC<Props> = ({ setNowPlaying, videoData }) => {
  return (
    <div className="w-full relative">
      {/* <video
        autoPlay
        muted
        loop
        style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
      >
        <source src="/video.mp4" type="video/mp4" />
      </video> */}
      {/*  */}

      <ReactPlayer
        // url={videoData}
        url="https://www.pexels.com/video/two-vehicles-traveling-in-the-desert-2099568/"
        height="100%"
        width="100%"
        className="absolute top-0 left-0 right-0 "
        poster="/drone.jpg"
        controls={true}
        playing={true}
        volume={1}
        light={true}
        playIcon={<BsFillPlayFill size={60} color="#D00265" />}
        style={{ objectFit: "cover", height: "100%", width: "100%" }}
        onEnded={() => setNowPlaying(false)}
        // pip={show && show}
      />
    </div>
  );
};

export default MainPlayer;
