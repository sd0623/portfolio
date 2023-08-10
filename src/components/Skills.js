import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Skills = () => {
    
      
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                About Me
                            </h2>
                            <p>
                                I'm currently a senior pursuing Honors Computer Science degree at the University of Central Florida.
                                With a perfect 4.0 GPA and a place on the President's Honor Roll, my academic dedication is unwavering.
                                My interests span from creating websites and apps to exploring how computers can learn.
                            </p>

                            <p>
                                I have worked on various projects involving full stack web and mobile development, machine learning neural networks, kernel modules, and data structures and algorithms. 
                                Previous internships, projects, and research study not only enhanced programming skills, but also instilled effective teamwork and collaboration. 
                                I enjoy solving complex and challenging problems, which I have practiced through competitive programming. 
                            </p>
                            <p>
                                With my strong dedication in computer science, I can bring an impactful contribution to any project.
                                I'm excited to contribute my passion and skills to the ever-evolving world of technology as a software engineer. 
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
            <img className="background-image-right" src={colorSharp2} />
        </section>
      )
}