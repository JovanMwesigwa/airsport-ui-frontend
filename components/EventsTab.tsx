import EventCard from "./EventCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import HorizontalScroll from "react-scroll-horizontal";
import { useQuery } from "react-query";
import { APIURL } from "../apiUrl";
import Link from "next/link";

const EventsTab: React.FC<any> = () => {
  const getAllEvents = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/`, {
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
      <div className="w-full h-96 px-4 md:px-8 my-5">
        {/* top tabs */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-row flex-1 items-center">
            <h3 className="text-white font-medium text-sm md:text-xl">
              Live events
            </h3>
            <div className="flex flex-col items-center mx-10">
              <p className="text-gray-500 text-sm md:text-base">
                Up coming events
              </p>
              <div className="w-full bg-[#D00265] h-1 mt-3" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500  text-sm md:text-base">Past events</p>
              {/* <div className="w-full bg-[#D00265] h-1 mt-3" /> */}
            </div>
          </div>
          <button className="text-gray-500 hidden md:flex bg-[#0D0E2C] text-sm px-8 py-1 rounded-full">
            view all
          </button>
        </div>

        {/* event cards */}
        <div className="flex  flex-1 mt-10 flex-row w-full relative">
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
                <HorizontalScroll>
                  {query.data.data.map((event: any) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </HorizontalScroll>
              </div>
              {query.data.length > 6 && (
                <div className="bg-white p-4 absolute right-0 top-20 rounded-sm cursor-pointer z-30">
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

export default EventsTab;

{
  /* <HorizontalScroll>
              {queryPropertyImages.data.results.map((image: any) => (
                <div
                  key={image.id}
                  title="front image"
                  className="flex flex-col w-[580px] h-full bg-gray-200 border-r-4 cursor-pointer border-white relative"
                >
                  <Image src={image.image} layout="fill" />
                </div>
              ))}
            </HorizontalScroll> */
}
