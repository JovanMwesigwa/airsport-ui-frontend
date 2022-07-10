import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface Props {
  event: any;
}

const MovieCard: React.FC<Props> = ({ event }) => {
  const [showTitle, setShowTitle] = useState<boolean>(false);

  return (
    <Link
      href={{
        pathname: "/watch",
        query: {
          vid: event.id,
        },
      }}
    >
      <div
        // title={event.movie}
        className={`h-56 overflow-hidden bg-white w-60 rounded-md flex flex-col cursor-pointer mr-6 hover:bg-black hover:opacity-20`}
      >
        <div className="flex flex-1 bg-gray-100 relative">
          <Image src={event.thumbnail} layout="fill" />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#00021C] p-5 flex  w-full h-1/2">
            <p className="text-white font-medium text-lg">{event.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
