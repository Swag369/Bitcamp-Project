import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup, Polygon, GeoJSON, MultiPolygon, polygonData, onEachContry, Polyline } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import zip_code_data from './California_ZipCodes/cali_zip_codes.json'

import { Bounds } from "leaflet";


// const Demo = () => {

//     const position = [37.42, -122.16];

//     const [zip_code_components, setzip_code_components] = useState([]);


//     useEffect(
//         (()=>{
            
//             const tile_Color = "pink";

//             console.log(zip_code_data)
//             console.log(zip_code_data.features)

//             zip_code_data.features.forEach(feature => {
//                 const predicted_Value = 15;
//                 // predicted_Value = prediction(feature.properties.zcta);
//                 // const statistical_Goodness = backend(predicted_Value);
//                 // tile_Color = backend_colorMap(statistical_Goodness);


//                 if (feature != null && feature.geometry != null && feature.geometry.coordinates != null){
//                     const position = feature.geometry.coordinates;

//                     // zip_code_components.push({pathOptions : {color : tile_Color}, {text : predicted_Value}, feature.geometry,coordinates});

//                     setzip_code_components(...zip_code_components +
//                         {pathOptions: {
//                             color: tile_Color,
//                         }},
//                         {text: predicted_Value},
//                         {position: feature.geometry.coordinates})

//                 }
//             });

//                 console.log(zip_code_components);
    


//         }) (), []
//     );




// 	return (
// 		<div style = {{height: "50vh"}}>


//             <div>Start</div>


// 			<MapContainer center = {position} zoom={10} style = {{height: 600, width : "70vw"}} bounds = {[[42.036346, -124.924605], [32.189861, -112.755379]]}>

// 				<TileLayer
// 					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 				/>



//                 {
//                     zip_code_data.components.forEach(feature => {
//                         <Polygon pathOptions={feature.pathOptions.color} positions={feature.positions} />
//                     })
//                 }


//                 {/* <GeoJSON
//                     data = {zip_code_data}
//                     onEachFeature = {
//                         <Popup>
//                             {zip_code_data}
//                         </Popup>
//                     }

//                 /> */}

// 			</MapContainer>


// 			<div>End</div>

// 		</div>



//     );
// };



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: -28, lng: 137 },
    });
    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    map.data.loadGeoJson(
        "https://storage.googleapis.com/mapsdevsite/json/google.json"
    );
}

const Demo = () => {
    window.initMap = initMap;
    
}



export default Demo;