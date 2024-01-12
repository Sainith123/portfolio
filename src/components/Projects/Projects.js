import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isDone={true}
              title="Let's Meet..."
              description="◦Developed a robust real-time video conferencing system utilizing WebRTC technology, enabling seamless
              virtual communication and collaboration.
              ◦Designed and implemented features that facilitate high-quality audio and video transmission, low-latency
              data sharing, and interactive real-time engagement. Incorporated intuitive user interface elements to
              enhance user experience, ensuring ease of use and efficient communication in a distributed work"
              ghLink="https://github.com/Sainith123/LetsMeet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isDone={true}
              title="UrCourse"
              description="◦Developed a dynamic course selling application for an EdTech company, harnessing HTML, CSS,
                JavaScript, and React to create an immersive and user-friendly online learning experience.
                ◦Designed and implemented an intuitive front-end interface that offers seamless navigation and visually appealing content presentation, enhancing the accessibility and engagement of learners"             
               ghLink="https://github.com/Sainith123/Course_selling_App "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isDone={false}
              title="Robotic Companion for elderly care"
              description="This project aims to create a Robotic Companion for Elderly Care, featuring mood detection, mood-responsive actions, fall detection, and medication dispensing. Through sentiment analysis, we assess the elderly person's mood, allowing the robot to respond accordingly. By utilizing cutting-edge technologies, we provide a comprehensive and compassionate solution to enhance the well-being of our elderly population."
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={quiz}
              isDone={true}
              title="React Quiz App"
              description="Developed a dynamic quiz website for learning React, This web site provides random questions from
              react.js concepts. MUI is used to create an immersive and user-friendly online learning experience."
              ghLink="https://github.com/Sainith123/Sainith-quiz-app"
               demoLink="https://bathing-suit-piglet.cyclic.app/"     // <--------Please include a demo link here 
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
