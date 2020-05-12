import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Button } from 'reactstrap';
import BookCard from '../components/books/BookCard';

import { Router } from '../routes';

import { getBooks, deleteBook } from '../actions';

class Books extends React.Component {

  static async getInitialProps() {
    let books = [];

    try {
      books = await getBooks();
      console.log(books)
    } catch (err) {
      console.error(err);
    }

    return { books };
  }

  navigateToEdit(bookId, e) {
    e.stopPropagation();
    Router.pushRoute(`/books/${bookId}/edit`)
  }

  displayDeleteWarning(bookId, e) {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this book ?');

    if (isConfirm) {
      this.deleteBook(bookId);
    }
  }

  deleteBook(bookId) {
    deleteBook(bookId)
      .then(() => {
        Router.pushRoute('/books');
      })
      .catch(err => console.error(err));
  }

  renderBooks(books) {
    const { isAuthenticated } = this.props.auth;

    return books.map((book, index) => {
      return (
        <Col key={index} md="4">
          <BookCard book={book}>
            {isAuthenticated &&
              <React.Fragment>
                <Button onClick={(e) => this.navigateToEdit(book._id, e)} color="warning">Edit</Button>{' '}
                <Button onClick={(e) => this.displayDeleteWarning(book._id, e)} color="danger">Delete</Button>
              </React.Fragment>
            }
          </BookCard>
        </Col>
      )
    })
  }

  render() {
    const { books } = this.props;
    const { isAuthenticated } = this.props.auth;

    return (
      <BaseLayout title="Aigo Book - Learn About My Experience" {...this.props.auth}>
        <BasePage className="book-page" title="Books">
          {isAuthenticated &&
            <Button onClick={() => Router.pushRoute('/books/new')}
              color="success"
              className="create-port-btn">Create Book
          </Button>
          }
          <Row>
            {this.renderBooks(books)}
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Books;
