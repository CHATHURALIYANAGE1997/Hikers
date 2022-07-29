import React from "react"
import equipments from "../components/Equipments/equipments.css"
import Navbar from "../components/Navbar/Navbar";

import { useTitle } from "../components/Title/Title"

const Equipments = () => {
    useTitle("Hikers")

    return (
        <div>
            <Navbar />
            <div className="bg" />
            <h1 className="CE_text text-capitalize text-white">Camping Equipments</h1>
        </div>
    )
}
export default Equipments