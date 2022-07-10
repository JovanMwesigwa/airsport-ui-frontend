import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  event: any;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const [eventID, setEventID] = useState<string | number>();

  if (!event.id) return null;

  return (
    <Link
      href={{
        pathname: "/watch",
        query: {
          vid: event.id,
        },
      }}
    >
      <div className="h-56 overflow-hidden bg-white w-56 md:w-52 rounded-md flex flex-col cursor-pointer mr-6">
        <div className="flex flex-1 bg-gray-100 relative">
          <Image src={event.thumbnail} layout="fill" />
        </div>
        <div className="flex flex-col p-2">
          <h1 className="text-sm font-bold">{event.subtitle}</h1>
          <p className="text-xs text-gray-700">20 - 23 Mar - Apr - 2022</p>
          <div className="flex flex-row items-center py-3">
            <div className="bg-gray-800 h-4 w-4 rounded-sm mr-2 relative">
              <Image src={event.country_flag} layout="fill" />
            </div>
            <p className="text-xs text-gray-500">
              {event.city} - {event.country}
            </p>
          </div>
        </div>
        {event.status === "upcoming" ? (
          <div className="flex items-center justify-center border-t-[1px] border-gray-300 p-2">
            <p className="text-yellow-500 text-xs">Live Soon</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center border-t-[1px] border-gray-300 bg-[#D00265] p-2">
            <p className="text-white text-xs">Live now</p>
          </div>
        )}
      </div>
    </Link>
  );
};
export default EventCard;
