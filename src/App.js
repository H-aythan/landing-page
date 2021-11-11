import {useRef, useState} from 'react';
import {Route,BrowserRouter as Router}from 'react-router-dom'
import styled from 'styled-components'
import Foot from './footer/Footer'
import Header from './header/Header';


import HomePage from './pages/homePage/HomePage';
import FirmaPage from './pages/firmaPage/firmaPage';
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
  const [color,setColor]=useState("red")
  
  const Container=styled.div`
  & .textColor{
    color:${color};
  }
  & .borderColor{
    border-bottom:1px solid ${color};
  }
  & .backgroundColor{
    background:${color}
  }

  & .backgroundColorH{
    &: hover{
      background:${color};
    }
  }
`
  
  return (
    <Router>

      {showForm&&<AsideForm/>}
      <Container onClick={()=>setShowForm(false)}>
        <RedesSociales init={init} setColor={setColor}/>
      
        <Header setNamePage={setNamePage} init={init} namePage={namePage}/>
        
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
      </Container>
      
      <WsLogo/>  
      {!showForm&&<BtnForm setShowForm={setShowForm}/>} 
    </Router>
  );
}


export default App;
