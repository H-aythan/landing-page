import React, { createContext,useState } from 'react'

const StatesGlobal=createContext();

const ProviderStates = ({children}) => {
    const [namePage,setNamePage]=useState();
    
    return (
        <StatesGlobal.Provider value={{
            namePage,
            setNamePage
        }}>
            {children}
        </StatesGlobal.Provider>
    )
}
export {ProviderStates};
export default StatesGlobal
