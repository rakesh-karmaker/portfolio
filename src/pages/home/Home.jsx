import Hero from "@/components/hero/Hero";
import "./home.css";

// the home page
const Home = ({ section }) => {
  console.log(section);
  return (
    <main className="home">
      <Hero />
    </main>
  );
};

export default Home;
