// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import RoutesPage from './components/RoutesPage';

/**
 * Here LandingPage is a default export and not a named export
 *  as it is export default from landing page
 */
function App() {
  return (
  <React.Fragment>
  <Router>
    <NavigationBar />
    <RoutesPage />
  </Router>
</React.Fragment>
  )
}

export default App;
