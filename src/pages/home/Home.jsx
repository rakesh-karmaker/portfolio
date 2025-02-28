import Hero from "@/components/hero/Hero";
import "./home.css";
import Services from "@/components/services/Services";
import { useEffect, useRef, useState } from "react";
import Projects from "@/components/projects/Projects";
import Designs from "@/components/designs/Designs";
import About from "@/components/about/About";
import Faqs from "@/components/faqs/Faqs";
import Contact from "@/components/contact/Contact";

// the home page
const Home = ({ section }) => {
  const pageRef = useRef(null);
  const [scrollKey, setScrollKey] = useState(0);

  useEffect(() => {
    if (!section || !pageRef.current) {
      return;
    }

    const ele = document.getElementById(section);
    setTimeout(() => {
      if (ele) {
        ele.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [section, scrollKey]);

  useEffect(() => {
    const handleHashChange = () => {
      setScrollKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="home" ref={pageRef}>
      <Hero />
      <Services />
      <Projects />
      <Designs />
      <About />
      <Faqs />
      <Contact />
    </main>
  );
};

export default Home;
