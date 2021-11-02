import Foot from './footer/Footer'
import Header from './header/Header';
import {Route,BrowserRouter as Router,}from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import firmaPage from './pages/firmaPage/firmaPage';

function App() {
  return (
    <Router>
      <div className="">
        <Header/>
          <Route exact path="/inicio" component={HomePage}/>
          <Route exact path="/Nuestra firmas" component={firmaPage}/>
        <Foot/>  
      </div>
    </Router>
  );
}

export default App;
