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
    this.state = {
      logined: false,
      code: 0
    }
  }
  receive = (val) => {
    this.setState({
      logined : val
    });
  }
  receiveCode = (val) => {
    this.setState({
      code: val
    })
  }
  render() {
    return (
      <Router>
        <Header logined = {this.state.logined} receive = {this.receive} ></Header>
        <Switch>
          <Route path="/dashboard">
            <Dashboard logined = {this.state.logined} code = {this.state.code}/>
          </Route>
          <Route path="/login">
            <Login logined = {this.state.logined} receive = {this.receive} receiveCode = {this.receiveCode} code = {this.state.code}/>
          </Route>
          <Route path="/dashboard1">
            <Dashboard1 logined = {this.state.logined} code = {this.state.code}/>
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
