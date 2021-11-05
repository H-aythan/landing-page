import Foot from './footer/Footer'
import Header from './header/Header';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import firmaPage from './pages/firmaPage/firmaPage';
import {useState } from 'react';
import EspecialidadPage from './pages/EspecialidadesPage/EspecialidadPage';

function App() {
  
  const [namePage,setNamePage]=useState("");
  
  return (
    <Router>
      <Header setNamePage={setNamePage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Nuestra Firma" component={firmaPage}/>
      <Route path={`/Especialidades`} component={()=><EspecialidadPage namePage={namePage} setNamePage={setNamePage}/>}/>
      <Foot/>  
     
    </Router>
  );
}

export default App;
