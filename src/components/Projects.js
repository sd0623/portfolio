import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Carousel from "react-multi-carousel";
import colorSharp from "../assets/img/color-sharp2.png";


import aws_logo from "../assets/img/aws_logo.png";
import research from "../assets/img/research.png";
import budgie from "../assets/img/budgie.png";
import nn_logo from "../assets/img/nn_logo.png";
import linux from "../assets/img/linux.png";


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
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">
                        <h2>Projects</h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={aws_logo} alt="logo" className="invert"></img>
                                    <h5 href="#">MyMenu</h5>
                                    <p>
                                        Full Stack Web development using AWS amplify, AWS ElasticSearch, AWS AppSync, AWS Cognito, Lambda functions, DynamoDB, and S3 buckets for backend and React and Bootstrap for frontend. 
                                        Seamless front-end integration allows users to search and sort their favorite restuarants' menu by their preferences and allergies.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={research} alt="logo" className="invert"></img>
                                    <h5 href="#">Research Study</h5>
                                    <p>
                                        Conducted and evaluated machine learning algorithms - logistic regression, random forest, and support vector machine - for predictions of coronary artery disease.
                                        Used kaggle open-source dataset and trained models to identify the most accurate and robust predictions model.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={budgie} alt="logo"></img>
                                    <h5 href="#">Budgie</h5>
                                    <p>
                                        Collaborated in team project to develop a full-stack application for budget tracker using Firebase, Express, React, and Node with REST API.
                                        Focused mainly on the frontend development of the website using React.js and Tailwind CSS and mobile application using Flutter Dart.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={nn_logo} alt="logo"></img>
                                    <h5 href="#">Image Processing</h5>
                                    <p>
                                    Trained image recognization on the dataset of raccoon, squirrels, and wombat animals using deep learning environment in Anaconda.
                                    Tweaked the convolution neural network parameters for a better accuracy of image classification.
                                    </p>
                                </div>
                                <div className="item">
                                    <img src={linux} alt="logo" className="invert"></img>
                                    <h5 href="#">Linux Kernel</h5>
                                    <p>
                                        Built and programmed a character-mode Linux device driver as a Kernel module in virtual machine.
                                        Implemented two separate kernel modules for input and output device with shared memory to manage communication. 
                                    </p>
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