import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";

import { useQuery } from "react-query";
import HorizontalScroll from "react-scroll-horizontal";
import { APIURL } from "../apiUrl";
import ShowCard from "./ShowCard";
import { eventsData } from "../data";

const ShowsTab: React.FC<any> = () => {
  const getAllShows = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/6/`, {
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
      <div className="w-full px-8 my-5 h-96">
        {/* top tabs */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row items-center flex-1">
            <h3 className="text-xl font-medium text-white">Shows and clips</h3>
          </div>
          <button className="text-gray-500  bg-[#0D0E2C] text-sm px-8 py-1 rounded-full">
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
                    <ShowCard key={event.id} event={event} />
                  ))} */}
                  {eventsData.events.map((event: any) => (
                    <ShowCard key={event.id} event={event} />
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

export default ShowsTab;
