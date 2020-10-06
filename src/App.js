import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './components/TovNav/TopNav';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import fakeData from './fakeData/fakeData';
import VolunteerEvent from './components/VolunteerEvent/VolunteerEvent';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [volunteers, setVolunteers] = useState(fakeData)
  const [loggedInUser, setLoggedInUser] = useState([{}]);

  return (
    <UserContext.Provider value={{ allLogin: [loggedInUser, setLoggedInUser], allVolunteer: [volunteers, setVolunteers]}}>
      <Router>
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/volunteerEvents">
            <TopNav />
            <VolunteerEvent />
          </Route>
          <Route exact path="/home">
            <TopNav />
            <Home />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute exact path="/register/:id">
            <Register />
          </PrivateRoute>
          <Route exact path="/">
            <TopNav />
            <Home />
          </Route>
          <Route exact path="*">
            <TopNav />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
