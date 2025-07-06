import Image from "next/image";

import React from 'react';

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AurumCard from "./components/AurumCard";
import Statistics from "./components/Statistics";
import BackGround from "./components/BackGround";
import Highlight from "./components/Highlight";
import Products from "./components/Products";
import Projects from "./components/Projects";
import ProjectStatus2 from "./components/ProjectStatus2";
import ProgressTimeline from "./components/MyForm";
import ContactBar from "./components/contact-s";
import PriceList from "./components/PriceList";
import GridComponent from "./components/GridComponent";
import Testimonials from "./components/Testimonials";
import ConnectWithus from "./components/ConnectWithus";
import Faq from "./components/Faq";
import GetInTouch from "./components/GetInTouch";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import MobileSubtract from "./components/icons/MobileSubtract";
// import PriceList from "./components/contact-s";
// import Practice from "./components/Practice";

const Home = () => {
  // const data = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return (
    <div>
      {/* navbar starts */}

      {/* navbar ends */}
      <header>
      {/* Only visible on large screens and up (≥1024px) */}
      {/* <div className="hidden lg:block"> */}
        <Navbar />
      {/* </div> */}

      {/* Only visible on small & medium screens (<1024px) */}
      
    </header>
      <HeroSection />
      <AurumCard />
      <Statistics />
      <BackGround />
      <Highlight />
     {/* <Projects/> */}
      {/* <ProjectStatus2 /> */}
      <Products/>
      <Testimonials></Testimonials>
      <ConnectWithus/>
      <Faq/>
      <GetInTouch/>
      <ContactUs/>

      {/* <ProgressTimeline/> */}
      {/* <Practice/> */}
      {/* <ContactBar />
      <PriceList /> */}
      
      {/* <GridComponent items={data} />     */}
      <Footer/>
      <div className="sm:hidden relative ">
      <MobileSubtract/>

      </div>
      </div>
  );
};

export default Home;
