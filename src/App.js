import { useRef, useState} from 'react';
import {Route,BrowserRouter as Router,Switch}from 'react-router-dom'
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
import PageNotFound from './pages/pageNotFound/PageNotFound';



function App() {
  const init=useRef()
  // eslint-disable-next-line
  const [color,setColor]=useState("#3730A3")
  
  return (
    <Router>
      
      <AsideForm/>
    
      <Container colorPrimary={color}>
        <RedesSociales init={init} />
      
        <Header init={init} />
        
        <Switch>
          <Route exact path="/" component={()=>
            <HomePage  init={init}/>
          }/>
          <Route path="/Especialidades" component={()=>
            <EspecialidadPage  init={init}/>
          }/>
          <Route exact path="/Nuestra Firma" component={()=>
            <FirmaPage init={init}/>
          }/>
          <Route exact path="/Clientes" component={()=>
            <ClientesPage init={init}/>
          }/>
          
          <Route exact path="/Contactenos" component={()=>
            <ContactPage init={init}/>
          }/>
        
          <Route exact path="/Oficinas" component={()=>
            <OficinasPage init={init}/>
          }/>
          
          <Route component={PageNotFound}/>
        </Switch>
        <Foot />  
      </Container>
    
      <WsLogo/>  
      
   </Router>
  );
}
const Container=styled.div`
  & .textColor{
    color:${props=>props.colorPrimary};
  }
  & .borderColor{
    border-bottom:1px solid ${props=>props.colorPrimary};
  }
  & .backgroundColor{
    background:${props=>props.colorPrimary};
  }
  & .borderColorT{
    border-top:8px solid ${props=>props.colorPrimary};
  }
  & .borderColorB{
    border-color:${props=>props.colorPrimary};
  }
  & .backgroundColorH{
    &: hover{
      background:${props=>props.colorPrimary};
    }
  }
`

export default App;
