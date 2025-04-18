import { useEffect, useState } from "react";
import React from "react"
import HomePromo from "../components/HomePromo";
import Services from "./Services";
import api from "../api";


function Home() {
    const [doctors, setDoctors] = useState([]);
    const [] = useState();

    return (
        <div>
            <HomePromo />
            <Services />
            
        </div>
    );
};

export default Home