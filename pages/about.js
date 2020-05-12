import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Aigo Book - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>Aigo books is a monthly book review publication distributed to 400,000 avid readers through subscribing bookstores and public libraries. Founded in 1988 and located in Nashville, Tennessee, BookPage serves as a broad-based selection guide to the best new books published every month. All of the content from the print edition is posted on BookPage.com each month. </p>
                <p>
                  All material on aigobooks.com is copyright © 1996-2020 by BookPage and ProMotion, Inc.
                </p>
                <p>
                  Our goal is to connect every book lover with their next great read. BookPage covers all types of books—from literary fiction, history and biography to popular genres like romance and mystery—and our book reviews, author interviews and special features are informative and accessible.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
