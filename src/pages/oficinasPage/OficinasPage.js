import React,{useEffect} from 'react'
import NuestrasOficinas from '../contactPage/componentsContactPage/NuestrasOficinas'

const OficinasPage = ({init}) => {
    useEffect(()=>{
        init.current.scrollIntoView('smooth','start')
      },[init])
    
      return (
        <div className="flex justify-center">
            <NuestrasOficinas/>
        </div>
    )
}

export default OficinasPage
