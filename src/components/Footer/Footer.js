import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {

    const buttonStyle = {
        padding: '9px 19px',
        border: '1px solid white',
        marginLeft: "30px",
        borderRadius: '25px'

    }

    return (
        <footer style={{ backgroundColor: "black", padding: "20px", height: "400px", marginTop: "150px" }}>
            <Container>
                <Row>

                    <Col md={6} xs={12} className="mt-5">
                        <h4 className="text-white">Mahfuj</h4>
                        <p className="w-75 text-white">In the mean time shall soon find out the cause of this: What was the epicurus towards their children.</p>
                        <aside className="d-flex text-white gap-4">
                            <h4>  <BsFacebook /></h4>
                            <h4>      <BsGithub /></h4>
                            <h4><AiFillLinkedin /></h4>
                        </aside>
                    </Col>

                    <Col md={6} xs={12} className="mt-5">
                        <button style={buttonStyle}>Dowload CV</button>
                        <button style={buttonStyle}>Contact Me</button>
                    </Col>

                </Row>

            </Container>
        </footer>
    );
};

export default Footer;