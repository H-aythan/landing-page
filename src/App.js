import Foot from './footer/Footer'
import Header from './header/Header';
import {Route,BrowserRouter as Router,}from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <Router>
      <Header/>
        <Route exact path="/" component={HomePage}/>
      <Foot/>
    </Router>
  );
}

export default App;
