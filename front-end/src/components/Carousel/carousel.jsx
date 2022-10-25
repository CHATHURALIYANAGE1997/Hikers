import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carouselarticle.css";
import { Link } from "react-router-dom";
import mountain1 from "./mountain1.JPG";
import mountain2 from "./adarakanda.jpg";
import mountain3 from "./Alagalla.JPG";
import mountain4 from "./lakegala.jpg";
import mountain5 from "./mulkirigala.jpg";
import mountain6 from "./dimbulagala.jpg";
import mountain7 from "./uthuwankanda.JPG";
import mountain8 from "./bathalegala.jpg";
import mountain9 from "./hanthana.jpeg";
import mountain10 from "./yahangala.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Articlecarousel() {
    return (
        <>
            <br></br>
            <div className="carouselarticle">
                <Carousel breakPoints={breakPoints}>
                    <Item>
                        <div>
                            <div>
                                <h5>Dolukanda Mountain</h5>
                            </div>
                            <div>
                                <img src={mountain1} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Adara Kanda</h5>
                            </div>
                            <div>
                                <img src={mountain2} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Alagalla mountain</h5>
                            </div>
                            <div>
                                <img src={mountain3} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Lakegala mountain</h5>
                            </div>
                            <div>
                                <img src={mountain4} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Mulkirigala mountain</h5>
                            </div>
                            <div>
                                <img src={mountain5} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Dimbulagala mountain</h5>
                            </div>
                            <div>
                                <img src={mountain6} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Uthuwankanda </h5>
                            </div>
                            <div>
                                <img src={mountain7} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Bathalegala mountain</h5>
                            </div>
                            <div>
                                <img src={mountain8} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Hanthana mountain</h5>
                            </div>
                            <div>
                                <img src={mountain9} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div>
                                <h5>Yahangala mountain</h5>
                            </div>
                            <div>
                                <img src={mountain10} className="articlemountain" alt="Mountain1"></img>
                            </div>
                            <div>
                                <Link to={"/ArticleInfo"}><button type="button" className="carouselbtn" >View More</button></Link>
                            </div>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<carousel />, rootElement);
export default Articlecarousel;
