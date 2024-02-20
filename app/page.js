import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/homeAbout/HomeAbout";
import Team from "./components/team/Team";
import Testmonial from "./components/testmonial/Testmonial";
import What from "./components/what/What";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <What />
      <Banner />
      <Testmonial />
      <Team />
    </div>
  );
}
