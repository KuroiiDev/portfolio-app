"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Geeks User Library App",
    description: "A library app designed for User, with easy interface, Developed Using Flutter",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KuroiiDev/geeks_forUser",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Geeks Admin Library App",
    description: "A library app designed for admin, with a complex and detailed interface, Developed Using Flutter",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KuroiiDev/geeks_forAdmin",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Geeks Api and Database",
    description: "An Api for the Geeks project, Developed Using Laravel.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Api"],
    gitUrl: "https://github.com/KuroiiDev/geeks_database",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Infernal Web App",
    description: "A simple well designed static website for motorcycle club developed using html, css, and js.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KuroiiDev/InfernalWeb",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NgabSen Android App",
    description: "A classroom Student Attendance app developed using Native Android Java.",
    image: "/images/projects/5.webp",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KuroiiDev/ngabsen_android",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Api"
          isSelected={tag === "Api"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;