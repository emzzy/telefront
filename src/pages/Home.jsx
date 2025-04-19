import { useEffect, useState } from "react";
import React from "react"
import HomePromo from "../components/HomePromo";
import Services from "./Services";
import api from "../api";
import { data } from "react-router-dom";


function Home() {
    const [doctors, setDoctors] = useState([]);
    const [] = useState();

    useEffect(() => {
        getDoctors();
    })

    const getDoctors = () => {
        api.get('api/users/medical-professionals/')
        .then((res) => res.data)
        .then((data) => setDoctors(data)).catch(error);
    };

    return (
        <div>
            <HomePromo />
            <Services />
        </div>
    );
};

export default Home