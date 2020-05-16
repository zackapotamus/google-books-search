import React, { useState, useEffect }  from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

const Saved = () => {
  const [books, setBooks] = useState([]);

  function handleDelete(id) {
    API.deleteBook(id).then(() => {
      setBooks(books.filter(book => book._id !== id));
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    API.getBooks().then((result) => {
      setBooks(result.data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <Container>
    <Card className="shadow-sm my-3">
      <Card.Header><h3>Saved Books</h3></Card.Header>
      <Card.Body>
        {books.map((book, index) => (
          <SavedBooks key={index} book={book} handleDelete={handleDelete}/>
        ))}
      </Card.Body>
    </Card>
  </Container>
  );
};

export default Saved;