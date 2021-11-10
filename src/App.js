import {useRef, useState } from 'react';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import Foot from './footer/Footer'
import Header from './header/Header';

import HomePage from './pages/homePage/HomePage';
import FirmaPage from './pages/firmaPage/FirmaPage';
import EspecialidadPage from './pages/EspecialidadesPage/EspecialidadPage';
import ClientesPage from './pages/ClientestPage/ClientesPage';
import ContactPage from './pages/contactPage/ContactPage';
import WsLogo from './componentsFixed/WsLogo';
import OficinasPage from './pages/oficinasPage/OficinasPage';

function App() {
  const init=useRef()
  const [namePage,setNamePage]=useState("");
  
  return (
    <Router>
      <div className="relative border-4 border-sky-800 w-full justify-center flex mb-8" style={{zIndex:"20000"}} ref={init}>
        <div className=" h-10 absolute md:right-40 flex">
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
          <div className="w-10 h-10 bg-sky-800"></div>
        </div>
      </div>
      
      <Header setNamePage={setNamePage}/>
      <Route exact path="/" component={()=>
        <HomePage setNamePage={setNamePage} init={init}/>
      }/>
      <Route path="/Especialidades" component={()=>
        <EspecialidadPage namePage={namePage} setNamePage={setNamePage} init={init}/>
      }/>
      <Route exact path="/Nuestra Firma" component={()=>
        <FirmaPage init={init}/>
      }/>
      <Route path="/Clientes" component={()=>
        <ClientesPage init={init}/>
      }/>
      
      <Route path="/Contactenos" component={()=>
        <ContactPage init={init}/>
      }/>
     
      <Route path="/Oficinas" component={()=>
        <OficinasPage init={init}/>
      }/>
      
      
      <Foot setNamePage={setNamePage}/>  
      <WsLogo/>     
    </Router>
  );
}

export default App;
