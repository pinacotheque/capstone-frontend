import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register';



function App() {
  return (
    <Router>
      <Route exact path='/' render={(routerProps) => <NavBar />} />

      <Route exact path='/' render={(routerProps) => <Home />} />
      <Route exact path='/login' render={(routerProps) => <Login />} />
      <Route exact path='/register' render={(routerProps) => <Register />} />


      <Route exact path='/' render={(routerProps) => <Footer />} />

    </Router>
  );
}

export default App;
