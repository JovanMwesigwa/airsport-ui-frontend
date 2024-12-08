import EventCard from "./EventCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import HorizontalScroll from "react-scroll-horizontal";
import { useQuery } from "react-query";
import { APIURL } from "../apiUrl";
import Link from "next/link";
import { eventsData } from "../data";

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
      <div className="w-full px-4 my-5 h-96 md:px-8">
        {/* top tabs */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-row items-center flex-1">
            <h3 className="text-sm font-medium text-white md:text-xl">
              Live events
            </h3>
            <div className="flex flex-col items-center mx-10">
              <p className="text-sm text-gray-500 md:text-base">
                Up coming events
              </p>
              <div className="w-full bg-[#D00265] h-1 mt-3" />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 md:text-base">Past events</p>
              {/* <div className="w-full bg-[#D00265] h-1 mt-3" /> */}
            </div>
          </div>
          <button className="text-gray-500 hidden md:flex bg-[#0D0E2C] text-sm px-8 py-1 rounded-full">
            view all
          </button>
        </div>

        {/* event cards */}
        <div className="relative flex flex-row flex-1 w-full mt-10">
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
                    <EventCard key={event.id} event={event} />
                  ))} */}
                  {eventsData.events.map((event: any) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </HorizontalScroll>
              </div>
              {query.data.length > 6 && (
                <div className="absolute right-0 z-30 p-4 bg-white rounded-sm cursor-pointer top-20">
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
