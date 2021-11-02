import Foot from './footer/Footer'
import Header from './header/Header';
import {Route,BrowserRouter as Router,}from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import firmaPage from './pages/firmaPage/firmaPage';

function App() {
  return (
    <Router>
      <div className="flex flex-wrap justify-center">
        <Header/>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/firmapage" component={firmaPage}/>
        <Foot/>
      </div>
    </Router>
  );
}

export default App;
