import Image from "next/image";

const AdvertSection: React.FC<any> = () => {
  return (
    <section>
      <div className="w-full md:h-96 p-8  bg-white flex flex-col md:flex-row items-center justify-around md:px-16">
        <div className="flex flex-1 flex-col">
          <h1 className="text-3xl md:text-5xl font-medium text-[#2a2929] md:w-2/3">
            Enjoy amazing aerosport for free
          </h1>
          <ul className="my-5 list-disc px-4">
            <li>Live events, films and shows</li>
            <li>Offline viewing</li>
            <li>Event reminders</li>
          </ul>

          <button className="bg-[#D00265] text-white px-6 py-2 rounded-md md:w-1/6 my-4 text-base">
            watch now
          </button>
        </div>
        <div className="w-96 hidden md:flex h-full rounded-md overflow-hidden relative">
          <Image src="/drone.jpg" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default AdvertSection;
