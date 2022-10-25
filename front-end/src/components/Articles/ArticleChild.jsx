import React, { useState } from "react";
import "../../components/Articles/articles.css";
import mountain1 from "../../components/Articles/mountain1.JPG";
import { useTitle } from "../../components/Title/Title"
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import oraganizeTrip from "../../pages/trav_organizeTrip";

const ArticleChild = (props) => {
    useTitle("Hikers")

    const accessToken = localStorage.jwtToken;

    const url = 'http://localhost:8080/user/getarticles';

    const [article, setArticle] = useState('');

    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = () => {
        axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allGuide = response.data;
            setArticle(allGuide);
            console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const [provinceData, seProvinceData] = useState('');
    const [mountData, setMountData] = useState('');

    const saveTripData = (pro, mo) => {
        localStorage.setItem("travel_province", pro);
        localStorage.setItem("travel_mount", mo);
    }

    const displayDetails = (props) => {
        if (article.length > 0) {
            return (
                article.map((article, index) => {
                   
                    return (
                        <>
                            <div className="mt-1 p-1 d-flex flex-row articles-container">
                                <div className="d-flew flex-column w-100">
                                    <a href="/ArticleInfo"><h3 className="pt-1 pb-2 pl-4 font-weight-bold articlesheadline">{article.mountname} : {article.province} Province</h3></a>
                                    <div className=" font-weight-bold articlesaddress">
                                        {article.description}
                                    </div>
                                    {/* <div className="mt-2 articleviews">25 views</div> */}
                                    <div className="articleauthor">
                                        <h8 className="articledate">{article.date}</h8>
                                    </div>
                                    <Link to="/organize">
                                        <button type="button" onClick={() => {saveTripData(article.province,article.mountname)}} className="article-child-button">Let's Travel <FontAwesomeIcon icon={faChevronRight}/></button>
                                    </Link>
                                </div>
                                <img src={mountain1} className="float-left mountain-img" alt="Mountain1"></img>
                            </div>
                        </>
                    );
                })
            )
        }

    }

    return (
        <>
            {displayDetails(props)}
        </>
    )
}

export default ArticleChild;