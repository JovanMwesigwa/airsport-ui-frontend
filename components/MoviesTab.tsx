import EventCard from "./EventCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

import { useQuery } from "react-query";
import { APIURL } from "../apiUrl";
import MovieCard from "./MovieCard";
import HorizontalScroll from "react-scroll-horizontal";
import { eventsData } from "../data";

const MoviesTab: React.FC<any> = () => {
  // getting movies
  const getAllMovies = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/5/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const query = useQuery("getAllMovies", getAllMovies);

  return (
    <section>
      <div className="w-full px-4 my-5 h-96 md:px-8">
        {/* top tabs */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row items-center flex-1">
            <h3 className="text-xl font-medium text-white">
              Movies and documentaries
            </h3>
          </div>
          <button className="text-gray-500 hidden md:flex bg-[#0D0E2C] text-sm px-8 py-1 rounded-full">
            view all
          </button>
        </div>

        {/* event cards */}
        <div className="relative flex flex-row flex-1 w-full mt-10">
          {/* card */}
          {query.isError ? (
            <div>Error</div>
          ) : query.isLoading ? (
            <div className="flex items-center justify-center h-screen">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div style={{ width: "100%", height: 500 }}>
                <HorizontalScroll>
                  {/* {query.data.data.map((event: any) => (
                    <MovieCard key={event.id} event={event} />
                  ))} */}
                  {eventsData.events.map((event: any) => (
                    <MovieCard key={event.id} event={event} />
                  ))}
                </HorizontalScroll>
              </div>
              {eventsData.events.length > 6 && (
                <div className="absolute right-0 p-4 bg-white rounded-sm cursor-pointer top-20">
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

export default MoviesTab;
