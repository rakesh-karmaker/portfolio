const { useState } = require("react");

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects I've Created for My Clients</h2>
    </section>
  );
};

const ProjectContainer = () => {
  const [index, setIndex] = useState(0);
  const projectList = [
    {
      id: 1,
      title: "MSCSC",
      description:
        "A vibrant ReactJS website for MSCSC, celebrating science, math, and space exploration. The platform features engaging events, exclusive member profiles, and interactive content that inspires curiosity and fosters learning.",
      link: "https://www.facebook.com/MSCSC2014/posts/pfbid02KYMvhF1ERzfb7ZgkoMM9f6xagKRcPNoJgeo3uVfiEoEfFA1D3i9ecF9xDXGNoa4Wl",
      image: "mscsc.png",
    },
    {
      id: 2,
      title: "Weather Compass",
      description:
        "Stay on top of the weather with my newly launched web app, crafted using the power of Node.js, Express, and EJS! Get real-time forecasts, detailed hourly updates, and the latest weather trends for any city.",
      link: "https://weather-compass.onrender.com/",
      image: "weather_compass.png",
    },
    {
      id: 3,
      title: "Astro Fest 1.0",
      description:
        "Astro Fest 1.0 is an interactive event registration platform designed for astronomy enthusiasts. It allows users to seamlessly register for the festival, explore event details, and stay updated on schedules.",
      link: "https://dribbble.com/shots/24731416-Astro-fest-1-0",
    },
  ];

  return <div className="projects-container"></div>;
};
