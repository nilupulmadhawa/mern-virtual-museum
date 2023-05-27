import React, { useEffect, useState } from "react";
import ReactStreetview from "react-streetview";
import { useParams } from "react-router";
import { useStateContext } from "../context/ContextProvider";
import { getMuseum } from "../services/museum";

const Museum = () => {
    const [museum, setMuseum] = useState({});
    const { setLoading } = useStateContext();
    const [show, setShow] = useState(false)
    const googleMapsApiKey = "AIzaSyB0pAAfd-SgsJm0w0hvzZfg90qfXoPN9bw";
    const [streetViewPanoramaOptions, setStreetViewPanoramaOptions] = useState({
        position: { lat: 0, lng: 0 },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        addressControl: true,
        showRoadLabels: true,
        zoomControl: true
    });
    const { id } = useParams()

    const _getmueum = async () => {
        setLoading(true);
        getMuseum(id).then((res) => {
            console.log("MUSEUM", res)
            setMuseum(res.data);
            setStreetViewPanoramaOptions({
                position: { lat: res.data.lat, lng: res.data.lng },
                pov: { heading: 100, pitch: 0 },
                zoom: 1,
                addressControl: true,
                showRoadLabels: true,
                zoomControl: true
            });
            setLoading(false);
        }).catch((err) => {
            console.log("ERR", err)
            setLoading(false);
        })
    }

    useEffect(() => {
        _getmueum();
    }, []);
    useEffect(() => {
        if (museum?.lat && museum?.lng) {
            setShow(true)
        }
    }, [museum]);

    // const streetViewPanoramaOptions = {
    //     position: { lat: positions.lat, lng: positions.lng },
    //     pov: { heading: 100, pitch: 0 },
    //     zoom: 1,
    //     addressControl: true,
    //     showRoadLabels: true,
    //     zoomControl: true
    // };

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
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",

                }}
            >
                <div
                    class="m-3 border-l border-gray-300 dark:border-gray-700">
                    <p
                        class=" text-xl font-bold  text-[#fff] ">
                        {museum?.title}</p>
                </div>
                <div
                    style={{
                        width: "80%",
                        height: "80vh",
                    }}>
                    {show && <ReactStreetview
                        apiKey={googleMapsApiKey}
                        streetViewPanoramaOptions={streetViewPanoramaOptions}
                    />}
                </div>
                <div
                    class="m-3 border-l border-gray-300 dark:border-gray-700">
                    <p
                        class=" text-[#fff] dark:text-[#fff]">
                        {museum?.description}</p>
                </div>
            </div>
        </div >
    );
};

export default Museum;
