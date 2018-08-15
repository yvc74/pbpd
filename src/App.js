import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dispatch from './pages/Dispatch';
import Header from './components/Header';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import Profile from './pages/Profile';
import Requests from './components/Requests';
import ReportPage from './pages/ReportPage';
import Settings from './pages/Settings';
import Stores from './pages/Stores';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

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
                  component={LoginForm}
                  exact
                  path="/login"
              />
              <Route
                  component={Requests}
                  exact
                  path="/requests"
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
