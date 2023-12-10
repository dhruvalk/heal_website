import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AboutUs from "@/sections/AboutUs";
import Collaborations from "@/sections/Collaborations";
import Contact from "@/sections/Contact";
import MainSection from "@/sections/MainSection";
import Projects from "@/sections/Projects";
import Image from "next/image";
import about_img2 from "../../public/about_us_2.png";
import Hamburger from "@/components/Hamburger";

export default function Home() {
  return (
    <div id="home">
      <Hamburger />
      <Header />
      <NavBar />
      <MainSection />
      <AboutUs />
      <Image
        src={about_img2}
        width={10000}
        height={10000}
        placeholder="blur"
        className="lg:hidden"
      />
      <Projects />
      <Collaborations />
      <Image src={"/contact.png"} width={10000} height={10000} />
      <Contact />
      <Footer />
    </div>
  );
}
