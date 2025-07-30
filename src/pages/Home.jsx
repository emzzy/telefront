import { useEffect, useState } from "react";
import React from "react"
import HomePromo from "../components/HomePromo";
import Services from "../components/Services";
// import api from "../api";
import DoctorList from "../components/DoctorList";


function Home() {
        
    return (
        <div>
            <HomePromo />
            <Services />
            <DoctorList />
        </div>
    );
}

export default Home