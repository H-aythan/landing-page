import React,{useEffect} from 'react'
import Carrousel from './components/Carrousel';
import Section1 from './components/Section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
const HomePage = ({setNamePage,init}) => {
    
    useEffect(()=>{
        init.current.scrollIntoView({block: "end", behavior: "smooth"})
      },[init])
    return (
        <div className="w-full overflow-hidden">
            <Carrousel/>
            <Section1 setNamePage={setNamePage}/>
            <Section2/>
            <Section3/> 
        </div>
    )
}
export default HomePage;