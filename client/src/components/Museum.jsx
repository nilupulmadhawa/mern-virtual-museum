import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";
import { useParams } from "react-router";

const Museum = () => {
    const googleMapsApiKey = "AIzaSyB0pAAfd-SgsJm0w0hvzZfg90qfXoPN9bw";
    const [positions, setpositions] = useState({
        lat: 25.6999017,
        lng: 32.639705
    });
    const { lat, lng } = useParams()
    useEffect(() => {
        console.log("POSITIONS", lat, lng)
        setpositions({
            lat: parseFloat(lat),
            lng: parseFloat(lng)
        });
    }, []);

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
            className="bg-dark"
            style={{
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                className="bg-gray-800"
                style={{
                    width: "90%",
                    height: "90%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "80%",
                        height: "80%",
                    }}>
                    <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />
                </div>
            </div>
        </div >
    );
};

export default Museum;
