import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class BookCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, book } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{book.title}</ModalHeader>
          <ModalBody>
            <p><b>Description: </b>{book.description}</p>
            <p><b>Author: </b>{book.author}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BookCardDetail;
