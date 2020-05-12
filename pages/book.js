import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router'
import axios from 'axios';

class Book extends React.Component {

  static async getInitialProps({query}) {
    const bookId = query.id;
    let book = {};

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${bookId}`);
      book = response.data;

    } catch(err) {
      console.error(err);
    }

    return {book};
  }

  render() {
    const { book } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> {book.title} </h1>
          <p> BODY: {book.body} </p>
          <p> ID:  {book.id} </p>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Book);
