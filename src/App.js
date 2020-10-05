import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Activities from './components/Activities/Activities';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        
    <Header></Header>
      <Switch>
      <Route path="/home">
      <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
          </Route>
          <Route path="/activities">
          <Activities></Activities>
          </Route>
        <PrivateRoute path="/registration/:eventName">
          <Registration></Registration>
      </PrivateRoute>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="*">
        
        </Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
