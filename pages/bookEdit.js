import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import BookCreateForm from '../components/books/BookCreateForm';

import { Row, Col } from 'reactstrap';

import { updateBook, getBookById } from '../actions';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

class BookEdit extends React.Component {

  static async getInitialProps({query}) {
    let book = {};

    try {
      book =  await getBookById(query.id);
    } catch(error) {
      console.error(err);
    }

    return {book};
  }

  constructor(props){
    super();

    this.state = {
      error: undefined
    }

    this.updateBook = this.updateBook.bind(this);
  }

  updateBook(bookData, {setSubmitting}) {
    setSubmitting(true);

    updateBook(bookData)
      .then((book) => {
        setSubmitting(false);
        this.setState({error: undefined});
        Router.pushRoute('/books');
      })
      .catch((err) => {
        const error = err.message || 'Server Error!';
        setSubmitting(false);
        this.setState({error});
      })
  }

  render() {
    const {error} = this.state;
    const { book } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="book-create-page" title="Update Book">
          <Row>
            <Col md="6">
              <BookCreateForm initialValues={book}
                                   error={error}
                                   onSubmit={this.updateBook} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth()(BookEdit);
