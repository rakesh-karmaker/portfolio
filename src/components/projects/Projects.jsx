import { projectList } from "@/services/data";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="projects-title">Projects I've Created for My Clients</h2>
      <ProjectContainer />
    </section>
  );
};

const ProjectContainer = () => {
  const [index, setIndex] = useState(0);
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
    <div className="projects-container">
      <div className="project-list">
        {projectList.map((project, i) => (
          <Project
            key={i}
            project={project}
            index={index}
            setIndex={setIndex}
            elemIndex={i}
          />
        ))}
      </div>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={projectList[index].title}
        className={"project-img"}
      />
    </div>
  );
};

const Project = ({ project, index, setIndex, elemIndex }) => {
  return (
    <div
      className={"project" + (index === elemIndex ? " active" : "")}
      onClick={() => {
        setIndex(elemIndex);
      }}
    >
      <div className="project-info">
        <h3 className="project-name">{project.title}</h3>
        <div>
          <p className="project-description">{project.description}</p>
          <Link to={project.link} target="_blank" className="project-link">
            View Project
          </Link>
        </div>
      </div>
      <ProgressBar index={index} setIndex={setIndex} elemIndex={elemIndex} />
    </div>
  );
};

const ProgressBar = ({ index, setIndex, elemIndex }) => {
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
