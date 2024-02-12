import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/homeAbout/HomeAbout";
import What from "./components/what/What";
import Why from "./components/why/Why";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <What />
      <Banner />
    </div>
  );
}
