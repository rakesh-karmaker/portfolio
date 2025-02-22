import Hero from "@/components/hero/Hero";
import "./home.css";
import Services from "@/components/services/Services";
import { useEffect, useRef } from "react";

// the home page
const Home = ({ section }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!section || !pageRef.current) {
      return;
    }

    console.log(section);

    const ele = document.getElementById(section);
    setTimeout(() => {
      if (ele) {
        ele.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [section]);

  return (
    <main className="home" ref={pageRef}>
      <Hero />
      <Services />
    </main>
  );
};

export default Home;
