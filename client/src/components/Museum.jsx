import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";

const App = () => {
    const googleMapsApiKey = "AIzaSyB0pAAfd-SgsJm0w0hvzZfg90qfXoPN9bw";
    const [positions, setpositions] = useState({
        lat: 25.6999017,
        lng: 32.639705
    });
    useEffect(() => {
        console.log("POSITIONS", positions);
    });
    const streetViewPanoramaOptions = {
        position: { lat: positions.lat, lng: positions.lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        addressControl: true,
        showRoadLabels: true,
        zoomControl: true
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#eeeeee"
            }}
        >
            <ReactStreetview
                apiKey={googleMapsApiKey}
                streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
        </div>
    );
};

export default App;
