import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import BookCardDetail from './BookCardDetail';

export default class BookCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { book, children } = this.props;
    const { isOpen } = this.state;

    return (
      <span onClick={this.handleToggle}>

        <BookCardDetail toggle={this.handleToggle} book={book} isOpen={isOpen}/>

        <Card className="book-card">
          <CardHeader className="book-card-header">{book.author}</CardHeader>
          <CardBody>
            <CardTitle className="book-card-title">{book.title}</CardTitle>
            <CardText className="book-card-text">{book.description}</CardText>
            <div className="readMore">
              {children}
            </div>
          </CardBody>
        </Card>
      </span>
    )
  }
}
