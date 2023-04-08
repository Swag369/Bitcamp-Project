import React, { useState, useEffect } from "react";
import { useLeaflet } from "react-leaflet";

const Demo = () => {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Load the California zipcode shapefile.
        const shapefile = 'california_zipcodes.shp';

        // Create a GeoJSON object for each zipcode.
        const df = geopandas.read_file(shapefile);
        const geojson = df.to_json();

        // Add the GeoJSON objects to the map.
        setMap(
        leaflet.Map({
            center: [37.7752, -122.4189],
            zoom: 10,
            layers: [
            leaflet.providers.Stamen('watercolor'),
            leaflet.GeoJSON(geojson),
            ],
        })
        );

        // Add a marker for each zipcode.
        for (const zipcode of df['zipcode']) {
        const marker = leaflet.marker([df['longitude'][zipcode], df['latitude'][zipcode]]);
        marker.bindPopup(df['zipcode'][marker.layer_id]);
        setMarkers([...markers, marker]);
        }
    }, []);

    return (
        <div>
        <leafletMap ref={setMap} markers={markers} />
        </div>
    );
};

export default Demo;