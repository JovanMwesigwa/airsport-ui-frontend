import { useQuery } from "react-query";
import axios from "axios";
import MediaPlayer from "./MediaPlayer";
import { APIURL } from "../apiUrl";
import { useEffect } from "react";

const Hero: React.FC<any> = () => {
  const getMainEvent = async () => {
    try {
      const result = await axios.get(`${APIURL}/events/main/`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result;
    } catch (error: any) {
      return error;
    }
  };

  const query = useQuery("getMainEvent", getMainEvent);

  return (
    <div className="flex flex-1 h-screen ">
      {/* {query.isError ? (
        <div>Error</div>
      ) : query.isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <MediaPlayer data={query.data} />
      )} */}
      <MediaPlayer data={query.data} />
    </div>
  );
};

export default Hero;
