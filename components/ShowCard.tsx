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
      <div className="flex flex-col h-56 mr-6 overflow-hidden bg-white rounded-md cursor-pointer w-52">
        <div className="relative flex flex-1 ">
          <Image src={event.image} layout="fill" alt="image here" />
          <div className="flex flex-col p-2 absolute bottom-0  top-0 bg-gradient-to-t from-[#00021C] right-0 left-0 items-center justify-center">
            <div className="flex flex-col items-center flex-1 rounded-full cursor-pointer  hover:text-white">
              <div className="flex flex-col items-center justify-center flex-1">
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
