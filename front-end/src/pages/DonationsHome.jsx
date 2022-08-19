import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Wallpaper from "../components/Donations/Wallpaper/Wallpaper";
import OurProjects from "../components/Donations/Projects/OurProjects";
import Services from "../components/Donations/OurService/Services";
import donationwall from "../components/Donations/Wallpaper/donationwall.jpg";
import { useTitle } from "../components/Title/Title"



const DonationsHome = () => {
    useTitle("Hikers")
    return (
        <div>
        <Navbar />
        <Wallpaper/>
        <OurProjects/> 
        <Services/>   
        </div>
    );
}

export default DonationsHome;