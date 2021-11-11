import React from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Users from './Components/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from './Components/AddUser';
import UserDetails from './Components/UserData';
import EditUser from './Components/EditUser'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Users/>
          </Route>
          <Route exact path="/home">
          <Users/>
            </Route>
          <Route exact path="/user">
            <Users/>
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/user/:id">
            <UserDetails />
          </Route>
          <Route exact path="/edituser/:id">
            <EditUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

