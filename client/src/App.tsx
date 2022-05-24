import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Components
import ResponsiveDrawer from './components/Drawer/Drawer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  return (
    // <Login />
    <Register />
    // <Router>
    // <div className="App">
    //   < ResponsiveDrawer />
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/RoleManager" exact component={Home} />
    //     <Route path="/ProjectUserManager" exact component={Home} />
    //     <Route path="/MyProjects" exact component={Home} />
    //     <Route path="/MyTickets" exact component={Home} />
    //     <Route path="/UserProfile" exact component={Home} />
    //   </Switch>

    // </div>
    // </Router>
  );
}

export default App;
