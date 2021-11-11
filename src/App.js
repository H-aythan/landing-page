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
import RedesSociales from './componentsFixed/RedesSociales';
import AsideForm from './componentsFixed/AsideForm';
import BtnForm from './componentsFixed/BtnForm';

function App() {
  const init=useRef()
  const [namePage,setNamePage]=useState("");
  const [showForm,setShowForm]=useState(false)
  return (
    <Router>

      {showForm&&<AsideForm/>}
      <RedesSociales init={init}/>
      <div onClick={()=>setShowForm(false)}>
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
      </div>
      <WsLogo/>  
      {!showForm&&<BtnForm setShowForm={setShowForm}/>} 
    </Router>
  );
}

export default App;
