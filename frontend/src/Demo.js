import React, { useState, useEffect } from "react";
import { useLeaflet, MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON, LayerStyle, polygonData, onEachContry } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

import { Bounds } from "leaflet";

const Demo = () => {

    const position = [37.42, -122.16];

    



	return (
		<div style = {{height: "50vh"}}>



			<MapContainer center = {position} zoom={13} style = {{height: 600, width : "70vw"}} bounds = {[[42.036346, -124.924605], [32.189861, -112.755379]]}>

				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>



			</MapContainer>


			<div>End</div>

		</div>



    );
};

export default Demo;