import { projectList } from "@/services/data";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Scrambler from "@/utils/Scrambler";
import { useRender } from "@/contexts/RenderContext";

const Projects = () => {
  const { start } = useRender();
  const [complete, setComplete] = useState(false);

  useGSAP(() => {
    gsap.set(".projects-container", { autoAlpha: 0, y: 100 });
    if (!start || !complete) return null;

    gsap.to(".projects-container", {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.out",
    });
  }, [start, complete]);

  return (
    <section className="projects section" id="projects">
      <h2 className="projects-title">
        <Scrambler
          text={"Projects I've Created for My Clients"}
          speed={25}
          canRun={start}
          setCompleted={setComplete}
        />
      </h2>
      <ProjectContainer />
    </section>
  );
};

const ProjectContainer = () => {
  const [index, setIndex] = useState(0);
  const [canSnap, setCanSnap] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1080 && canSnap) {
      const project = document.getElementById(projectList[index].id);
      setTimeout(() => {
        project.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [index]);

  return (
    <div className="projects-container">
      <div className="project-list">
        {projectList.map((project, i) => (
          <Project
            key={i}
            project={project}
            index={index}
            setIndex={setIndex}
            elemIndex={i}
            setCanSnap={setCanSnap}
            canSnap={canSnap}
          />
        ))}
      </div>
      {window.innerWidth > 1080 && <ProjectImg index={index} />}
    </div>
  );
};

const ProjectImg = ({ index }) => {
  const [imageSrc, setImageSrc] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    // Preload images
    projectList.forEach((project) => {
      const img = new Image();
      img.src = "/projects/" + project.image;
    });
  }, []);

  // add an animation to the image when the index changes
  useGSAP(() => {
    setImageSrc("/projects/" + projectList[index].image);
    const ele = imgRef.current;
    gsap.set(ele, { autoAlpha: 0, y: 50 });
    gsap.to(ele, { autoAlpha: 1, y: 0, duration: 0.5 });
  }, [index]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={projectList[index].title}
      className={"project-img"}
      height={"100%"}
      width={"100%"}
    />
  );
};

const Project = ({
  project,
  index,
  setIndex,
  elemIndex,
  canSnap,
  setCanSnap,
}) => {
  return (
    <div
      className={"project" + (index === elemIndex ? " active" : "")}
      onClick={() => {
        setIndex(elemIndex);
        !canSnap && setCanSnap(true);
      }}
    >
      <div className="project-info" id={project.id}>
        <h3 className="project-name">{project.title}</h3>
        <div className="wrapper">
          <div className="inner">
            <p className="project-description">{project.description}</p>
            <Link to={project.link} target="_blank" className="project-link">
              View Project
            </Link>
            {window.innerWidth < 1080 && (
              <img
                src={"/projects/" + project.image}
                alt={project.title}
                className="project-img"
                height={"100%"}
                width={"100%"}
              />
            )}
          </div>
        </div>
      </div>
      <ProgressBar
        index={index}
        elemIndex={elemIndex}
        setIndex={setIndex}
        canSnap={canSnap}
        setCanSnap={setCanSnap}
      />
    </div>
  );
};

const ProgressBar = ({ index, setIndex, elemIndex, canSnap, setCanSnap }) => {
  const [width, setWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (index !== elemIndex) {
      setWidth(0);
      return;
    }

    let progressInterval;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && index === elemIndex) {
            progressInterval = setInterval(() => {
              setWidth((prevWidth) => {
                if (prevWidth >= 100) {
                  clearInterval(progressInterval);
                  setWidth(0);
                  setIndex(index === projectList.length - 1 ? 0 : index + 1);
                  !canSnap && setCanSnap(true);
                  return prevWidth;
                }
                return prevWidth + 1;
              });
            }, 75);
          } else {
            clearInterval(progressInterval);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      clearInterval(progressInterval);
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [index, elemIndex, setIndex]);

  return (
    <div className="progress-bars" ref={progressBarRef}>
      <div className="progress-bg"></div>
      <div className="progress-bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default Projects;
