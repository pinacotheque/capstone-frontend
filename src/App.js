import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
//import Footer from './Components/Footer/Footer';
import Landing from './Components/Home/Landing'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Home from './Components/Home/Home'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react'
import Profile from './Components/Profile/Profile';




function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <Router>
      <Route exact path={['/', '/home', '/login', '/register', '/profile']} render={(routerProps) => <NavBar loggedIn={loggedIn} />} />

      <Route exact path='/' render={(routerProps) => <Landing />} />
      <Route exact path='/login' render={(routerProps) => <Login />} />
      <Route exact path='/register' render={(routerProps) => <Register />} />
      <Route exact path='/home' render={(routerProps) => <Home />} />
      <Route exact path='/profile' render={(routerProps) => <Profile />} />



      {/* 
      <Route exact path='/' render={(routerProps) => <Footer />} /> */}

    </Router>
  );
}

export default App;
