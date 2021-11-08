import {useState } from 'react';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import Foot from './footer/Footer'
import Header from './header/Header';

import HomePage from './pages/homePage/HomePage';
import firmaPage from './pages/firmaPage/firmaPage';
import EspecialidadPage from './pages/EspecialidadesPage/EspecialidadPage';
import ClientesPage from './pages/ClientestPage/ClientesPage';
import ContactPage from './pages/contactPage/ContactPage';

function App() {
  
  const [namePage,setNamePage]=useState("");
  
  return (
    <Router>
      <Header setNamePage={setNamePage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Nuestra Firma" component={firmaPage}/>
      <Route path="/Especialidades" component={()=><EspecialidadPage namePage={namePage} setNamePage={setNamePage}/>}/>
      <Route path="/Clientes" component={()=><ClientesPage/>}/>
      <Route path="/Contactenos" component={ContactPage}/>
      <Foot/>  
     
    </Router>
  );
}

export default App;
