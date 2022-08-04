import React from "react";
import Navbar from "../components/Navbar/Navbar";
import donations from "../components/Donations/donations.css"
import { useTitle } from "../components/Title/Title"

const Donations = () => {
    useTitle("Hikers")
    return (
        <div>
        <Navbar/>
        <div className="donationbgimg">
            
        </div>
        <h1>hi</h1>
        </div>
    );

}
export default Donations