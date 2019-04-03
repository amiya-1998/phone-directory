import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import AddContact from './AddContact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container w-100">
          <Route exact path="/" component={Landing} />
          <Route exact path="/addContact" component={AddContact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
