import MainPlayer from "./MainPlayer";
import MediaPlayer from "./MediaPlayer";

interface Props {
  fullLayout?: boolean;
  setNowPlaying?: any;
  show?: boolean;
  videoData?: string;
}

const WatchWindow: React.FC<Props> = ({ show, setNowPlaying, videoData }) => {
  return (
    <div className={`flex flex-1 h-screen bg-[#00021C]`}>
      <MainPlayer
        setNowPlaying={setNowPlaying}
        show={show}
        videoData={videoData}
      />
    </div>
  );
};

export default WatchWindow;
