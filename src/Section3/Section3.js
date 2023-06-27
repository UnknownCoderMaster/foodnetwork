import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section3.scss";
import {Col, Container, Row, Button} from "reactstrap";

function Section3() {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <div className="item1">
                        <img className="img-fluid" src="/images/sister.png" width="100%" alt="Sister"/>
                    </div>
                </Col>
                <Col md="6" className="d-flex align-items-center">
                    <div className="item2">
                        <h5 className="text7">ABOUT US</h5>
                        <h3 className="text8">Food Stalls with Persons but  to  Product marketing plane
                            catlogues etc to. </h3>
                        <p className="text9">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
                            equipment  make your marketing plane Effective.</p>
                        <Button className="btn btn-warning">Read More</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Section3;