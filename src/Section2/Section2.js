import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section2.scss";
import {Card, Col, Container, Row} from "reactstrap";

function Section2() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Container>
            <h4 className="text3">FEATURES</h4>
            <h3 className="text4">Food with a New Passion</h3>
            <Row>
                <Col md="4">
                    <Card>
                        <div className="circle">
                            <img src="/icons/home.svg" width="44.95px" alt="Home"/>
                        </div>
                        <div className="circle-body">
                            <h4 className="text-5">Quality Food</h4>
                            <p className="text6">It can be a very secure path to earn good money and make you very
                                successful creative entrepreneur.</p>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <div className="circle circle1">
                            <img src="/icons/food-delivery.png" width="44.95px" alt="Delivery"/>
                        </div>
                        <div className="circle-body">
                            <h4 className="text-5">Food Delivery</h4>
                            <p className="text6">It can be a very secure path to earn good money and make you very
                                successful creative entrepreneur.</p>
                        </div>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <div className="circle circle2">
                            <img src="/icons/smile.png" width="44.95px" alt="Smile"/>
                        </div>
                        <div className="circle-body">
                            <h4 className="text-5">Super Taste</h4>
                            <p className="text6">It can be a very secure path to earn good money and make you very
                                successful creative entrepreneur.</p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Section2;