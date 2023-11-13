import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import AboutUs from "@/sections/AboutUs";
import Collaborations from "@/sections/Collaborations";
import Contact from "@/sections/Contact";
import MainSection from "@/sections/MainSection";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainSection />
      <AboutUs />
      <Projects />
      <Collaborations />
      <Contact />
      <Footer />
    </div>
  );
}
