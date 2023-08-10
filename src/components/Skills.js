import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
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
                            I'm currently a senior pursuing a Honors Computer Science degree at the University of Central Florida.
                            With a perfect 4.0 GPA and a place on the President's Honor Roll, my academic dedication is unwavering.
                            My interests span from full stack web development, where I bring designs to life, to the intrigue of machine learning algorithms and the importance of cybersecurity. 
                            Engaging in competitive programming sharpens my problem-solving skills. 
                            I'm excited to contribute my passion and skills to the ever-evolving world of technology.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}