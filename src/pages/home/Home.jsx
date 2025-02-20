import Hero from "@/components/hero/Hero";

const Home = ({ section }) => {
  console.log(section);
  return (
    <main className="home">
      <Hero />
    </main>
  );
};

export default Home;
