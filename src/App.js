import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

//Proprietary Components and Page Links
import { Dispatch, Header, Home, Login, Profile, NewRequest, ReportPage, Settings, Stores } from './utils/importUtils';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


  render() {
    return (
      <div>
      <Header />
      <Container className="py-5">
          <Switch>
              <Route
                  component={Home}
                  exact
                  path="/"
              />
              <Route 
                  component={Stores}
                  exact
                  path="/stores"
              />
              <Route
                  component={Dispatch}
                  exact
                  path="/dispatch"
              />
              <Route
                  component={Login}
                  exact
                  path="/login"
              />
              <Route
                  component={NewRequest}
                  exact
                  path="/request"
              />
              <Route
                  component={Profile}
                  exact
                  path="/profile"
              />
              <Route
                component={ReportPage}
                exact
                path="/reports"
              />
              <Route
                  component={Settings}
                  exact
                  path="/settings"
              />
              <Redirect to="/" />
          </Switch>
      </Container>
  </div>
    );
  }
}

export default App;
