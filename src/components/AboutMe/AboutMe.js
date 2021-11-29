import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../images/aboutmeImg.jpg';
import uploadedFileLink from '../../Mahfujur Rahman.pdf';
import Skill from '../Skill/Skill';

const AboutMe = () => {

    const buttonStyle = {
        padding: '5px 15px',
        backgroundColor: '#BFDAD9',
        border: '1px solid black',
        borderRadius: '25px'
    }

    // backgroundSize:"cover",
    // backgroundColor: 'rgba(45, 58, 74, 0.9)',
    // backgroundBlendMode: 'darken, luminosity',
    // marginTop: 175

    return (

        <Container>

            <Row>

                <Col lg={6} style={{ width: '550px' }}>
                    <img width="500" height="600" src={image} alt="myImg"
                    />
                </Col>

                <Col lg={6}>
                    <article>
                        <h2 className="mt-5">About Me</h2>
                        <p className="mt-4 mb-4">I am a Junior Web Developer. My training in web development along with my ability to HTML, CSS, JavaScript, React. Take a look at my work or get in touch! mahfujglobal@gmail.com</p>

                        <aside>
                            <p><b>Name:</b> Mahfujur Rahman</p>
                            <p><b>Date of birth:</b> September 1, 2005</p>
                            <p><b>Address:</b> Moulvibazar, Sylhet, Bangladesh</p>
                            <p><b>Email:</b> mahfujglobal@gmail.com</p>
                            <p><b>Phone:</b> +8801907851900</p>
                        </aside>

                        <h6 className="my-4">20 Project Compelete</h6>
                        <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
                            <button style={buttonStyle}>Download CV</button>
                        </a>
                    </article>
                </Col>

            </Row>
            <Skill />
        </Container>
    );
};

export default AboutMe;