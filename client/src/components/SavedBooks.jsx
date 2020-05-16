import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

const Result = ({ book, handleDelete }) => {
  return (
    <Container>
      <Card className="my-3 shadow">
        <Card.Body>
          <Row className="d-flex justify-content-between">
            <Col className="col-5 mb-4">
              <h2>{book.title}</h2>
            </Col>
            <Col className="col-3">
              <Row>
                <Col>
                <a className="btn btn-primary" href={book.link} target="_blank">View</a>
                </Col>
                <Col>
                <Button className="btn-success" onClick={() => handleDelete(book._id)}>Save</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              {book.image && <img className="shadow-sm" src={book.image} alt="book cover" />}
            </Col>
            <Col xs={10}>
              <p>{book.description}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Result;
