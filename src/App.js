import './App.css';

import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Biodata from './pages/Biodata'
import Gallery from './pages/Gallery'

function App() {
  return ( 
    <Router>
      <Navbar />
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/biodata">
            <Biodata/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
