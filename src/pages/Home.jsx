import { useEffect, useState } from "react";
import React from "react"
import HomePromo from "../components/HomePromo";
import Services from "../components/Services";
// import api from "../api";
import DoctorList from "../components/DoctorList";


function Home() {
    // const [doctors, setDoctors] = useState([]);
    // const [] = useState();

    // useEffect(() => {
    //     getDoctors();
    // }, [])

    // const getDoctors = () => {
    //     api
    //         .get('api/users/all-doctors/')
    //         .then((res) => res.data)
    //         .then((data) => { setDoctors(data); console.log(data) })
    //         .catch((err) => alert(err));
    // };
    
    // const
    
    return (
        <div>
            <HomePromo />
            <Services />
            <DoctorList />
        </div>
    );
}

export default Home