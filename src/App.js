import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Duong from './components/Duong';
import Hiep from './components/Hiep';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import InfoDuong from './components/InfoDuong';
import InfoHiep from './components/InfoHiep';
import Dashboard1 from './components/Dashboard1';
import { Component } from 'react';
import Login from './components/Login';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard1">
            <Dashboard1 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
  
}

export default App;
