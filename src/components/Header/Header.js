import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import headerBackgroundImage from '../../images/backgorund3.png';
import developerImage from '../../images/developerImg.png';
import Nav from './Nav';
import uploadedFileLink from '../../Mahfujur Rahman.pdf';

const Header = () => {

    const headerBackground = {
        backgroundImage: `url(${headerBackgroundImage})`,
        height: '100vh',
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const buttonStyle = {
        backgroundColor: '',

    }


    return (

        <header style={headerBackground}>
            <Nav />

            <Container >
                <Row className="align-items-center" style={{ marginTop: "13%" }}>
                    <Col lg={6}>
                        <img style={{ marginLeft: '20%' }} width="400" height="400" src={developerImage} alt="" />
                    </Col>
                    <Col lg={6}>
                        <aside className="headerText text-dark">
                            <h3>HEY! I AM</h3>
                            <h1 className="my-2">Mahfujur Rahman</h1>
                            <h2>Junior Web Developer</h2>
                        </aside>

                        <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
                            <Button>
                                <i className="fas fa-download" />
                                Download Cv
                            </Button>
                        </a>

                    </Col>
                </Row>
            </Container>


            {/* <aside> */}
            {/* <img width="350" className="rounded-circle" src={developerImg} alt="" /> */}
            {/* </aside> */}
            {/* 
            <aside className="headerText">
                <h3>HEY! I AM</h3>
                <h1>Mahfujur Rahman</h1>
                <h2>Junior Web Developer</h2>
            </aside> */}



        </header>
    );
};

export default Header;