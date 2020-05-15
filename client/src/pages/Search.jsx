import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (query.trim()) {
      API.searchBooks(query).then((res) => {
        console.log(res);
        setResults(res.data);
      });
    }
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Search by title..."
                      name="query"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        {results.map((r) => (
          <Row>
            <Col>
              <Card>
                <h1>Result</h1>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Search;
