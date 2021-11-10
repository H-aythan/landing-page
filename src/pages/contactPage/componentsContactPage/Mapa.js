import {useEffect, useRef}from 'react'
import 'leaflet/dist/leaflet.css'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import {IconLocation}from './IconLocation'
const Mapa = ({position}) => {
    const mapRef=useRef();
    
    useEffect(()=>{
        mapRef.current.leafletElement.locate()
    },[])
    
    return (
        <Map className="w-full md:w-3/4 z-2 h-96" ref={mapRef}
                zoom={5} 
                center={{lat:position.lat, lng:position.lng}}
            >
                
           <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
            <Marker position={[position.lat,position.lng]} icon={IconLocation}> 
                <Popup>
                    Nombre oficina
                </Popup>
            </Marker>
        </Map>
    )
}

export default Mapa
