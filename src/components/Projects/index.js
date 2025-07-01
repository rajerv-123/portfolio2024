import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";

import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, leveraging my skills in
          React.js development. Below are some of my notable projects:
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            value="all"
            onClick={() => setToggle("all")}
          >
            All
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id} // ✅ fix: add unique key
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
