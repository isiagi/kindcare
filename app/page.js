import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import HomeAbout from "./components/homeAbout/HomeAbout";
import Why from "./components/why/Why";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Banner />
    </div>
  );
}
