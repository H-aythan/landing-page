import L from"leaflet"
import icon from '../../../img/icon-location.png'

export const IconLocation=L.icon({
    iconUrl:icon,
    iconRetinaUrl:icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon"
})