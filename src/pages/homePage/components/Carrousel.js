import {useEffect, useState} from 'react'
import img1 from '../../../img/Estudio_Juridico_Antezana_slider_02.jpg'
import img2 from '../../../img/Estudio_Juridico_Antezana_botton.jpg'
const imgs=[img1,img2];
const Carrousel = () => {
    const [imgIndex,setImgIndex]=useState(0);
    const [imgSelected,setImgSelected]=useState();
    
    useEffect(() => {
        setImgSelected(imgs[imgIndex]);
       
    }, [imgIndex])
    
    const newImg=(next)=>{
        next
            ?imgIndex<imgs.length-1
                ?setImgIndex(imgIndex+1)
                :setImgIndex(0)
            :imgIndex>0
                ?setImgIndex(imgIndex-1)
                :setImgIndex(imgs.length-1)


    }
    
    return (
        <div className="items-center border-2">
            <div className="relative flex items-center justify-center ">
                <img alt="" src={imgSelected}/>
                <button className="hidden md:block absolute left-5 text-3xl bg-gray-200 rounded-full w-10 h-10 bg-opacity-75 text-center"
                    onClick={()=>newImg()}
                >
                    {`<`}
                </button>
                <button className="hidden md:block absolute right-5 text-3xl bg-gray-200 rounded-full w-10 h-10 bg-opacity-75 text-center"
                    onClick={()=>newImg(true)}
                >
                    {`>`}
                </button>
                <div className="absolute bottom-8 flex gap-x-1">{imgs.map((item,i)=>{
                    return <div className={`w-5 h-5 bg-gray-200 ${imgIndex===i&&"bg-gray-500"} rounded-full cursor-pointer border-4`} key={i} onClick={()=>setImgIndex(i)}></div>   
                })}</div>
            </div>
        </div>
    )
}

export default Carrousel
