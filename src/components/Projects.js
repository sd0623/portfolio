import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp2.png";


import aws_logo from "../assets/img/aws_logo.png";
import research from "../assets/img/research.png";


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
                                    <img src={aws_logo} alt="logo"></img>
                                    <h5>MyMenu</h5>
                                    <p>
                                        Full Stack Web development using AWS amplify, AWS ElasticSearch, AWS AppSync, AWS Cognito, Lambda functions, DynamoDB, and S3 buckets for backend and React and Bootstrap for frontend. 
                                        Seamless front-end integration allows users to search and sort their favorite restuarants' menu by their preferences and allergies.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={research} alt="logo" className="invert"></img>
                                    <h5>Research Study</h5>
                                </div>
                                <div className="item">
                                    <h5>Deep Learning Neural Networks</h5>
                                </div>
                                <div className="item">
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