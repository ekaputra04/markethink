import Article from "./components/Article";
import Client from "./components/Client";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import SocialMedia from "./components/SocialMedia";
import Subscribe from "./components/Subscribe";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Content />
      <SocialMedia />
      <Service />
      <Article />
      <Subscribe />
      <Footer />
    </>
  );
}
