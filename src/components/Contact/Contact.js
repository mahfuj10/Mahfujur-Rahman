import React, { useState } from 'react';
import { Alert, Col, Container, Row, Toast } from 'react-bootstrap';
import { IoIosSend } from 'react-icons/io';
import emailsjs from 'emailjs-com'
import Button from '@restart/ui/esm/Button';

const Contact = () => {

    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const inputStyle = {
        width: "500px",
        marginBottom: "20px",
        height: '50px',
        borderRadius: "8px",
        border: '1px solid gainsboro'
    }
    const buttonStyle = {
        border: "1px solid gainsboro",
        padding: "8px 20px",
        backgroundColor: "white",
        width: '150px',
        borderRadius: '25px'
    }

    const handaleEmailSubmit = e => {
        e.preventDefault();
        emailsjs.sendForm('service_943ouu4', 'template_f9oggkm', e.target, 'user_CrO7w1JtJhg0LsPSw5jNh')
            .then(() => {
                setShow(true)
                console.log('object');
            }).catch(error => setError(error.message))

    }


    return (
        <Container >
            <h3 className="mt-5 mb-4">Contact Me </h3>
            <Row>

                <Col lg={6} style={{ backgroundColor: "#F8F9FA" }}>
                    <form onSubmit={handaleEmailSubmit} >
                        <input name="name" placeholder="Enter your name..." style={inputStyle} type="text" />
                        <input name="user_email" placeholder="Enter your email..." style={inputStyle} type="email" />

                        <textarea placeholder="Your message..." required name="message" rows="5" cols="65" />
                        <br />
                        <input type="submit" value=" SEND" style={buttonStyle}


                        />

                    </form>

                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>

                            <strong className="me-auto">Mahfujur Rahman</strong>

                        </Toast.Header>
                        <Toast.Body>Thanks for your message. </Toast.Body>
                    </Toast>


                    {
                        error && <Alert variant="danger">
                            {error}
                        </Alert>
                    }
                </Col>

                <Col className="p-0" lg={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.41631707765!2d92.0264566155158!3d24.505672765419085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751962b672fb407%3A0x83aafaa402c5d0e!2sBorokapon%20Rd!5e0!3m2!1sen!2sbd!4v1638189181560!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="hello world"></iframe>
                </Col>

            </Row>

        </Container>
    );
};

export default Contact;