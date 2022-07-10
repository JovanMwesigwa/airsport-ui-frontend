import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  dark?: boolean;
  children: React.ReactNode;
  fullLayout?: boolean;
  nowPlaying?: boolean;
}

const MainLayout: React.FC<Props> = ({
  children,
  dark,
  fullLayout,
  nowPlaying,
}) => {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(80);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
      } else {
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div className={`p-0 m-0 ${!dark ? "bg-[#00021C]" : "bg-white"}`}>
      <Head>
        <title>Airsport Tv</title>
        <meta
          name="description"
          content="Enjoy all airsports at a click of a button"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Navbar
        dark={dark}
        fullLayout={fullLayout}
        nowPlaying={nowPlaying}
        show={show}
      />
      <div>{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
