import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'


function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
