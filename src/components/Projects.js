import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
        <section className="project" id="prioject">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                        <h2>Projects</h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={projImg1} alt="Image" />
                                    <h5>MyMenu</h5>
                                    <p>Full Stack Web development using AWS amplify, AWS ElasticSearch, AWS AppSync, AWS Cognito, Lambda functions, DynamoDB, and S3 buckets for backend and React and Bootstrap for frontend. </p>
                                </div>
                                <div className="item">
                                    <img src={projImg1} alt="Image" />
                                    <h5>Research Study</h5>
                                </div>
                                <div className="item">
                                    <img src={projImg1} alt="Image" />
                                    <h5>Deep Learning Neural Networks</h5>
                                </div>
                                <div className="item">
                                    <img src={projImg1} alt="Image" />
                                    <h5>Kernel Modules</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp} />
        </section>
    )
}