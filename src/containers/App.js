import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import DocumentMeta from 'react-document-meta';
import config from '../config';

import Header from '../components/Header';
import Footer from '../components/Footer';

import RememberMe from '../decorators/RememberMe';

@RememberMe
class App extends Component {
  render() {
    const {children, location} = this.props;

    require('../styles/app.scss')

    return (
      <div>
        <DocumentMeta {...config.app} />
        <Header className="row"/>
        <main className="row">
          {children}
        </main>
        <Footer className="row"/>
      </div>
    )
  }
}

export default App;
