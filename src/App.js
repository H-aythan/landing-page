import {useState } from 'react';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import Foot from './footer/Footer'
import Header from './header/Header';

import HomePage from './pages/homePage/HomePage';
import firmaPage from './pages/firmaPage/firmaPage';
import EspecialidadPage from './pages/EspecialidadesPage/EspecialidadPage';
import ClientesPage from './pages/ClientestPage/ClientesPage';
import ContactPage from './pages/contactPage/ContactPage';
import NuestrasOficinas from './pages/contactPage/componentsContactPage/NuestrasOficinas';
import WsLogo from './componentsFixed/WsLogo';

function App() {
  
  const [namePage,setNamePage]=useState("");
  
  return (
    <Router>
      <div className="relative border-4 border-indigo-800 w-full justify-center flex" style={{zIndex:"20000"}}>
        <div className=" h-10 absolute md:right-40 flex">
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
        </div>
      </div>
      <Header setNamePage={setNamePage}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/Nuestra Firma" component={firmaPage}/>
      <Route path="/Especialidades" component={()=><EspecialidadPage namePage={namePage} setNamePage={setNamePage}/>}/>
      <Route path="/Clientes" component={()=><ClientesPage/>}/>
      <Route path="/Contactenos" component={ContactPage}/>
      <div className="flex justify-center">
        <Route path="/Oficinas" component={()=><NuestrasOficinas/>}/>
      </div>
      <Foot/>  
      <WsLogo/>     
    </Router>
  );
}

export default App;
