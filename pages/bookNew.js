import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import BookCreateForm from '../components/books/BookCreateForm';

import { Row, Col } from 'reactstrap';

import { createBook } from '../actions';

import { Router } from '../routes';
import withAuth from '../components/hoc/withAuth';


const INITIAL_VALUES = { title: '',
                         author: '',
                         description: '' };

class BookNew extends React.Component {

  constructor(props){
    super();

    this.state = {
      error: undefined
    }

    this.saveBook = this.saveBook.bind(this);
  }

  saveBook(bookData, {setSubmitting}) {
    console.log('submit')
    setSubmitting(true);

    createBook(bookData)
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

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="book-create-page" title="Create New Book">
          <Row>
            <Col md="6">
              <BookCreateForm initialValues={INITIAL_VALUES}
                                   error={error}
                                  onSubmit={this.saveBook} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth()(BookNew);
