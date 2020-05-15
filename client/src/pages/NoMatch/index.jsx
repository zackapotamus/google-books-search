import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import Jumbotron from "../components/Jumbotron";
import Jumbotron from "react-bootstrap/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
