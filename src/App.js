import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Home/Landing'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Home from './Components/Home/Home'
import 'react-calendar/dist/Calendar.css';




function App() {
  return (
    <Router>
      <Route exact path={['/', '/home', '/login', '/register']} render={(routerProps) => <NavBar />} />

      <Route exact path='/' render={(routerProps) => <Landing />} />
      <Route exact path='/login' render={(routerProps) => <Login />} />
      <Route exact path='/register' render={(routerProps) => <Register />} />
      <Route exact path='/home' render={(routerProps) => <Home />} />


      {/* 
      <Route exact path='/' render={(routerProps) => <Footer />} /> */}

    </Router>
  );
}

export default App;
