// import Image from "next/image";
import LandingPage from "./components/landingPage/landingPage";
import Advantage from "./components/advantage/advantage";
import Carousel from "./components/carousel/carousel";
import Shopify from "./components/shopify/shopify";
import Faqs from "./components/faqs/faqs";
import Ready from "./components/ready/ready";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      
      <LandingPage/>
      <Carousel/>
      <Advantage/>
      <Shopify/>
      <Faqs/>
      <Ready/>
      <Footer/>
    </main>
  );
}
