import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AboutUs from "@/sections/AboutUs";
import Collaborations from "@/sections/Collaborations";
import Contact from "@/sections/Contact";
import MainSection from "@/sections/MainSection";
import Projects from "@/sections/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainSection />
      <AboutUs />
      <Projects />
      <Collaborations />
      <Image
        src={"/contact.png"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Contact />
      <Footer />
    </div>
  );
}
