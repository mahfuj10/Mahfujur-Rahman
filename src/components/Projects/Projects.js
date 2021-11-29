import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../images/project1.png';
import image2 from '../../images/project2.jpeg';
import image3 from '../../images/project3.jpeg';
import image4 from '../../images/project4.jpeg';
import image5 from '../../images/project5.jpeg';
import './Projects.css';

const Projects = () => {

    const projects = [
        {
            "image": image1,
            "id": "1",
            "name": "Vollenter Network"
        },
        {
            "image": image2,
            "id": "1",
            "name": "Vacation Travel Agency",
            "link": "https://happy-travel-ajency.netlify.app/"
        },
        {
            "image": image3,
            "id": "1",
            "name": "Red Onion Resturants"
        },
        {
            "image": image4,
            "id": "1",
            "name": "The Love Of Food"
        }
    ]

    return (


        <Container>
            <h3 className="my-5">Projects</h3>
            <Row>

                {
                    projects.map(project => <Col lg={4}>
                        <article className="shadow">

                            <img className="img-fluid mb-5" src={project.image} alt="projectimage" />
                            <h4 className="p-3">{project.name}</h4>
                            <a href="" target="_blank">
                                <button className="btn btn-dark m-3">View Website</button>
                            </a>
                        </article>
                    </Col>)
                }


            </Row>

        </Container>
    );
};

export default Projects;