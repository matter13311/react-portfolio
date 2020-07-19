import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Hero(props){
    return(
        <Jumbotron className="jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3> }
                        { props.gitHubLink && <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer"><FaGithub class="github-icon mr-3 mt-1" size="30px" /></a>}
                        { props.gitHubLink && <a href={props.linkendinLink} target="_blank" rel="noopener noreferrer"><FaLinkedin class="linkedin-icon mt-1" size="30px"/></a>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

    );

}

export default Hero;

//{ props.link && <h3 className="lead font-weight-light">{props.link}</h3> } 