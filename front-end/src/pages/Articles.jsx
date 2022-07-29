import React from "react";
import Navbar from "../components/Navbar/Navbar";
import articles from "../components/Articles/articles.css"
import mountain1 from "../components/images/mountain1.JPG";
import mountain2 from "../components/images/mountain2.jpg";
import { FaSearchLocation } from 'react-icons/fa';

const Articles = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 mt-5 text-left container">
                <div className="mt-1 pl-5 p-1 search-container">
                    <form class="form-inline articlesform">
                        <span className="articlesSearchbutton"><i class="fa fa-search"></i></span>
                        <input class="articlesSearchfield form-control-sm ml-3 mt-3 w-75" type="text" placeholder="Search by the province"
                            aria-label="Search" />
                        <button type="button" className="btn btn-primary searchbtn" >search</button>
                    </form>
                </div>
                <div className="ArticlesPageNav">
                    <nav aria-label="Page navigation example">
                        <ul class=" mt-3 pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="mt-1 p-1 d-flex flex-row articles-container">
                    <div className="d-flew flex-column w-100">
                        <a href="url"><h3 className="pt-1 pb-2 pl-4 font-weight-bold">Know before you go : Dolukanda Mountain</h3></a>
                        <h8 className="pl-4 pb-2 font-weight-bold address">Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka .
                            Nowadays this place is very famous for hiking and camping.</h8>
                        <div>
                            <h7 className="views">25 views</h7>
                        </div>
                        <div>
                            <h8 className="author">by Mahesh Vimalasena  | <h8 className="date">Jul 5,2022  10.00 PM</h8></h8>
                        </div>
                    </div>
                    <img src={mountain1} className="float-left mountain-img" alt="Epitome"></img>
                </div>
                <div className="mt-3 p-1 d-flex flex-row articles-container">
                    <div className="d-flew flex-column w-100">
                        <a href="url"><h3 className="pt-1 pb-2 pl-4 font-weight-bold">Must to visit : Kiribathkate gala</h3></a>
                        <h8 className="pl-5 font-weight-bold address">Kiribathkate gala is a very famous rock in Kurunegala district.
                            Many travelers both local and foreign used go hiking on this rock.When climbing to the peak the whole kurunegala city can be seen and there is a beautiful scenary when we climb the peak of this rock.</h8>
                        <div>
                            <h7 className="pl-4 mt-3 float-left font-weight-bold views">7 views</h7>
                        </div>
                        <div>
                            <h8 className="pl-4 author">by Mahesh Vimalasena  | <h8 className="date">Jul 4,2022  04.36 PM</h8></h8>
                        </div>
                    </div>
                    <img src={mountain2} className="float-left mountain-img" alt="Epitome"></img>
                </div>

            </div>

        </div>
    );
}

export default Articles