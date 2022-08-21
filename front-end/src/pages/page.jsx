import React from "react";
import "../Styles/page.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
import Navbar from "../components/Navbar/Navbar";


// const img = new URL ("./istockphoto-1189969126-612x612 - Copy.jpg", import.meta.url)

const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="backImg">
                <WelcomeHikers/>
                

            </div>
        </div>
    )
}
export default Page