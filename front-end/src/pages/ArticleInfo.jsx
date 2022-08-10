import React from "react";
import articles from "../components/Articles/articles.css"
import Navbar from "../components/Navbar/Navbar";
import mountain1 from "../components/images/mountain1.JPG";
import mountain2 from "../components/images/mountain2.jpg";
import { useTitle } from "../components/Title/Title"

const ArticleInfo = () => {
    useTitle("Hikers")
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>dshda</h1>
                <div className="row">
                    <div className="mt-4 col-sm-8">
                        <a href="/ArticleInfo"><h3 className=" articlesheadline">Know before you go : Dolukanda Mountain</h3></a>
                        <div className=" font-weight-bold articlesaddress"><p>Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka . Nowadays this place is very famous for hiking and camping.
                            <br />
                            <br />
                            Sanjeewani in Hindu mythology is a magical herb with super natural powers which of them considered be growing at dark and believing to cure any disease This legend also explains the abundance of Ayurvedic herbs in this area, was one reason to build the Arankale ancient forest monastery during the period of Anuradhapura.
                            <br />
                            <br />
                            The route to Dolukanda mountain is from Colombo - Nittambuwa - Kurunegala  10th mile post on Hiripitiya road - Hunupola - Dolukanda.It is better to contact a local person who know the trek when traveling to this mountain.This is a bit hard trek and not recommend for senior citizens and travelers with kids.
                            While climbing Dolukanda you will see a lot of gum on the way. There are also huge russet trees and large herbaceous plants.
                            <br />
                            <br />
                            Among these are rare herbs called Gardi Raja. It is noteworthy that the herb grows on another plant. At the same time, the black stone ruins can be seen along the way as evidence that there were buildings. Many treasures can be seen being destroyed by thieves.
                            Adviceable to bring 2 Lts of water / snacks but ensure to bring back all plastics you bring.It is not dangerous to climb but make sure to go as a group. Beware of wild boars / insects.</p>
                        </div>
                        <div className="mt-2 views">25 views</div>
                        <div className="author">by Mahesh Vimalasena  | </div>
                    </div>

                    <div className="mt-4 col-sm-4">
                        <h8 className="articleinfodate">Jul 5,2022  10.00 PM</h8>
                        <img src={mountain1} className=" mountain-img" alt="Mountain1"></img>
                        <img src={mountain1} className="mountain-img" alt="Mountain1"></img>
                        <img src={mountain1} className="mountain-img" alt="Mountain1"></img>
                    </div>
                </div>
            </div>
            {/* <div className="p-5 mt-5 text-left container">
                <div className="mt-1 p-1 row articles-container">
                    <div className="col-8 w-100">
                        <a href="/ArticleInfo"><h3 className=" articlesheadline">Know before you go : Dolukanda Mountain</h3></a>
                        <div className=" font-weight-bold articlesaddress">Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka . Nowadays this place is very famous for hiking and camping.
                        Sanjeewani in Hindu mythology is a magical herb with super natural powers which of them considered be growing at dark and believing to cure any disease This legend also explains the abundance of Ayurvedic herbs in this area, was one reason to build the Arankale ancient forest monastery during the period of Anuradhapura.
                        The route to Dolukanda mountain is from Colombo - Nittambuwa - Kurunegala  10th mile post on Hiripitiya road - Hunupola - Dolukanda.It is better to contact a local person who know the trek when traveling to this mountain.This is a bit hard trek and not recommend for senior citizens and travelers with kids.
                        While climbing Dolukanda you will see a lot of gum on the way. There are also huge russet trees and large herbaceous plants. Among these are rare herbs called Gardi Raja. It is noteworthy that the herb grows on another plant. At the same time, the black stone ruins can be seen along the way as evidence that there were buildings. Many treasures can be seen being destroyed by thieves.
                            <h8 className="date">Jul 5,2022  10.00 PM</h8>
                        </div>
                        <div className="mt-2 views">25 views</div>
                        <div className="author">by Mahesh Vimalasena  | </div>
                    </div>
                    <div className="col-4 w-100" >
                    <img src={mountain1} className=" mountain-img" alt="Mountain1"></img>
                    <img src={mountain1} className="mountain-img" alt="Mountain1"></img>
                    <img src={mountain1} className="mountain-img" alt="Mountain1"></img>
                    </div>
                </div>
            </div> */}
        </div>

    );

}
export default ArticleInfo