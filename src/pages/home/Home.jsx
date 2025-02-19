import Hero from "@/components/hero/Hero";
import { PrimaryBtn, SecondaryBtn } from "@/components/ui/btns/Btns";

const Home = () => {
  return (
    <main className="home">
      <PrimaryBtn link="/about">About me</PrimaryBtn>
      <SecondaryBtn link="/projects">Projects</SecondaryBtn>
      <Hero />
    </main>
  );
};

export default Home;
