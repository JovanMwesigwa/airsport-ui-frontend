import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { useQuery } from "react-query";
import {
  AdvertSection,
  EpisodesTab,
  EventsTab,
  Hero,
  MainLayout,
  MoviesTab,
  ShowsTab,
  // SimilarContentTab,
  SimilarShowsTab,
  WatchWindow,
} from "../../components";
import { APIURL } from "../../apiUrl";

const Stream  = () => {
  const [fullLayout, setFullLayout] = useState<boolean>(false);

  const [nowPlaying, setNowPlaying] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(100);

  const router = useRouter();
  const { vid } = router.query;

  const getEvent = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/${vid}/detail`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const query = useQuery(["getEvent", vid], getEvent);

  const getEventMedia = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/${vid}/link`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const queryMedia = useQuery("getEventMediaLinks", getEventMedia);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    setNowPlaying(true);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar, fullLayout, show]);

  return (
    <MainLayout dark fullLayout={fullLayout} nowPlaying={nowPlaying}>
      <>
          <WatchWindow
            fullLayout={fullLayout}
            setNowPlaying={setNowPlaying}
            show={show}
            videoData='/video2.mp4'
          />
          <div className=" flex flex-1 flex-col items-center justify-between bg-[#00021C]">
            <div className="p-8">
              <p className="text-white font-light te">
               Sky diving
              </p>
              <h1 className="text-white font-extrabold text-5xl">
                Title{" "}
              </h1>
              <p className="text-gray-200 mt-5">
                Descrimination
              </p>
            </div>
          </div>
          {/* <EpisodesTab />
          <SimilarContentTab />
          <SimilarShowsTab />
          <AdvertSection /> */}
        </>
    </MainLayout>
  );
};

export default Stream;
