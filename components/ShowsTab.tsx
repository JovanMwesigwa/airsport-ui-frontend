import EventCard from "./EventCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

import { useQuery } from "react-query";
import { APIURL } from "../apiUrl";
import MovieCard from "./MovieCard";
import HorizontalScroll from "react-scroll-horizontal";
import ShowCard from "./ShowCard";
import Link from "next/link";

const ShowsTab: React.FC<any> = () => {
  const getAllShows = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/4/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const query = useQuery("getAllShows", getAllShows);
  return (
    <section>
      <div className="w-full h-96 px-8 my-5">
        {/* top tabs */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row flex-1 items-center">
            <h3 className="text-white font-medium text-xl">Shows and clips</h3>
          </div>
          <button className="text-gray-500  bg-[#0D0E2C] text-sm px-8 py-1 rounded-full">
            view all
          </button>
        </div>

        {/* event cards */}
        <div className="flex  flex-1 mt-10 flex-row w-full relative">
          {/* card */}
          {query.isError ? (
            <div>Error</div>
          ) : query.isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div style={{ width: "100%", height: 500 }}>
                {query.data.data.length <= 1 ? (
                  query.data.data.map((event: any) => (
                    <ShowCard key={event.id} event={event} />
                  ))
                ) : (
                  <HorizontalScroll>
                    {query.data.data.map((event: any) => (
                      <ShowCard key={event.id} event={event} />
                    ))}
                  </HorizontalScroll>
                )}
              </div>
              {query.data.length > 6 && (
                <div className="bg-white p-4 absolute right-0 top-20 rounded-sm cursor-pointer">
                  <AiOutlineArrowRight />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowsTab;