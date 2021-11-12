import React,{useState} from 'react'

const ImgAnimate = () => {
    const [animation,setAnimation]=useState(false)
    return (
        <div className="h-10 w-10 overflow-hidden" 
            onMouseEnter={()=>setAnimation(true)}
            onMouseLeave={()=>setAnimation(false)}
            >
            <div className={`w-full h-full bg-indigo-700 transition transform ${animation&&"-translate-y-10"}`}></div>
            <div className={`w-full h-full bg-red-400 transition transform ${animation&&"-translate-y-10"}`}></div>
        </div>
    )
}

export default ImgAnimate
