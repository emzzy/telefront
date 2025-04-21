import { useEffect, useState } from "react";
import React from "react"
import HomePromo from "../components/HomePromo";
import Services from "./Services";
import api from "../api";


function Home() {
    const [doctors, setDoctors] = useState([]);
    const [] = useState();

    useEffect(() => {
        getDoctors();
    }, [])

    const getDoctors = () => {
        api
            .get('api/users/medical-professionals/')
            .then((res) => res.data)
            .then((data) => { setDoctors(data); console.log(data) })
            .catch((err) => alert(err));
    };
    
    // const
    
    return (
        <div>
            <HomePromo />
            <Services />
        </div>
    );
}

export default Home