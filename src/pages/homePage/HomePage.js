import React from 'react'
import Carrousel from './components/Carrousel';
import Section1 from './components/Section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
const HomePage = () => {
    
    
    return (
        <div className="w-full overflow-hidden">
            <Carrousel/>
            <Section1 />
            <Section2/>
            <Section3/> 
        </div>
    )
}
export default HomePage;