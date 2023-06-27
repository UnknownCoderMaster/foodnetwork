import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section1.scss';
import {Col, Container, Row, Button} from "reactstrap";

function Section1() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Container>
            <Row>
                <Col md="6">
                    <h1 className="text1">Making time a good time by making food the good food.</h1>
                    <p className="text2">There are many things are needed to start the Fast Food Business. You need not only Just Food
                        Stalls with Persons but also specialized equipment,</p>
                    <Button className="btn btn-warning btn1">Order Now</Button>
                    <Button className="btn text-warning bg-white border-light">Food Details</Button>
                </Col>
                <Col md="6"><img className="mt-mx" src="/images/photo.png" width="99%" alt="Photo"/></Col>
            </Row>
        </Container>
    );
}

export default Section1;