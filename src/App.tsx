import Client from "./components/Client";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import SocialMedia from "./components/SocialMedia";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Content />
      <SocialMedia />
      <Service />
    </>
  );
}
