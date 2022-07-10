import type { NextPage } from "next";
import {
  AdvertSection,
  EventsTab,
  Hero,
  MainLayout,
  MoviesTab,
  ShowsTab,
} from "../components";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <EventsTab />
      <MoviesTab />
      <ShowsTab />
      <AdvertSection />
    </MainLayout>
  );
};

export default Home;
