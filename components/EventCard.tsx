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
      <div className="flex flex-col w-56 mr-6 overflow-hidden bg-white rounded-md cursor-pointer h-60 md:w-52">
        <div className="relative flex flex-1 bg-gray-100">
          <Image src={event.image} layout="fill" alt="event image" />
        </div>
        <div className="flex flex-col p-2">
          <h1 className="text-sm font-bold">{event.subtitle}</h1>
          <p className="text-xs text-gray-700">20 - 23 Mar - Apr - 2022</p>
          <div className="flex flex-row items-center py-3 gap-x-2">
            <h1>{event.country.flag}</h1>
            <p className="text-xs text-gray-500">
              {event.country.city} - {event.country.name}
            </p>
          </div>
        </div>
        {event.status === "upcoming" ? (
          <div className="flex items-center justify-center border-t-[1px] border-gray-300 p-2">
            <p className="text-xs text-yellow-500">Live Soon</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center border-t-[1px] border-gray-300 bg-[#D00265] p-2">
            <p className="text-xs text-white">Live now</p>
          </div>
        )}
      </div>
    </Link>
  );
};
export default EventCard;
