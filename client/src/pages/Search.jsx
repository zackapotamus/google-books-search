import React, { useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Result from "../components/Result";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";

function Search() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  function handleSave(book) {
    API.saveBook(book).then();
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (query.trim()) {
      API.searchBooks(query)
        .then((res) => {
          console.log(res);

          setBooks(res.data);
        })
        .catch((err) => console.log(err));
      // API.searchBooks(query).then((res) => {
      //   console.log(res);
      //   setResults(res.data);
      // });
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="shadow-lg my-3">
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Book Search</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Button type="submit" onClick={handleFormSubmit}>Search</Button>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Search by title..."
                        name="query"
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Card className="shadow-sm my-3">
          <Card.Header><h3>Results</h3></Card.Header>
          <Card.Body>
            {books.map((book, index) => (
              <Result key={index} book={book} handleSave={handleSave}/>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Search;
