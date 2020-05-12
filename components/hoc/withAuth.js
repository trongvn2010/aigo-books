import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default role => Component =>
  class withAuth extends React.Component {

  static async getInitialProps(args) {
    const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

    return { ...pageProps };
  }

  renderProtectedPage() {
    const { isAuthenticated, user } = this.props.auth;
    let isAuthorized = false;

    if (isAuthenticated && user) {
      isAuthorized = true;
    }

    return ( <Component {...this.props} />)
  }

  render() {
    return this.renderProtectedPage()
  }
}



