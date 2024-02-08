import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Why from "./components/why/Why";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Why />
    </div>
  );
}
