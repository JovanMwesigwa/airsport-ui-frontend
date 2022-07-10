import EventCard from "./EventCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

import { useQuery } from "react-query";
import { APIURL } from "../apiUrl";

const EpisodesTab: React.FC<any> = () => {
  const getAllEvents = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/2/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const query = useQuery("getAllEvents", getAllEvents);
  return (
    <section>
      <div className="w-full h-96 px-8 bg-[#00021C]">
        {/* top tabs */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row flex-1 items-center">
            <h3 className="text-white font-medium text-xl">Episodes</h3>
            <div className="flex flex-col items-center mx-10">
              <p className="text-gray-500">Ep 1 - 6</p>
              <div className="w-full bg-[#D00265] h-1 mt-3" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500">Ep 6 - 12</p>
              {/* <div className="w-full bg-[#D00265] h-1 mt-3" /> */}
            </div>
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
              {query.data.data.map((event: any) => (
                <EventCard key={event.id} event={event} />
              ))}

              {query.data.length > 6 && (
                <div className="bg-white p-4 absolute right-0 top-20 rounded-sm cursor-pointer">
                  <AiOutlineArrowRight />
                </div>
              )}
            </>
          )}

          <div className="bg-white p-4 absolute right-0 top-20 rounded-sm cursor-pointer">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodesTab;
