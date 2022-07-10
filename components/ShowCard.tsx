import Image from "next/image";
import Link from "next/link";
import { BsFillPlayCircleFill, BsFillPlayFill } from "react-icons/bs";

interface Props {
  event: any;
}

const ShowCard: React.FC<Props> = ({ event }) => {
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
    <div className="h-56 overflow-hidden bg-white w-52 rounded-md flex flex-col cursor-pointer mr-6">
      <div className="flex flex-1 relative ">
        <Image src={event.thumbnail} layout="fill" />
        <div className="flex flex-col p-2 absolute bottom-0  top-0 bg-gradient-to-t from-[#00021C] right-0 left-0 items-center justify-center">
          <div className=" flex cursor-pointer flex-1 flex-col items-center  rounded-full hover:text-white">
            <div className="flex flex-1 flex-col items-center justify-center">
              <BsFillPlayCircleFill
                size={40}
                color="#777171"
                className="hover:text-white"
              />
            </div>

            <p className="text-lg text-white self-baseline">{event.title}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
export default ShowCard;
