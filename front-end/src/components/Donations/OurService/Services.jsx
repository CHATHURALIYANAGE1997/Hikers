import React from "react";
import clean1 from "./clean1.jpg";
import clean2 from "./clean2.jpeg";
import clean3 from "./clean3.jpg";



const Services = () => {
    return (
        <div>
            <h2 className="projectsh2">Our Projects</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={clean1} className="float-left" alt="pic1"></img>
                    </div>
                    <div class="col">
                        <h2>Our Work Promise To Upload the Trust Placed</h2>
                        <p>This was a recently done community service project done by our team.Here we cleaned the forest where there many plastic and waste.
                            Forest cleaning means measures towards forest protection and improvement of forest conditions through removal of dead or fallen trees, twigs, limbs and trees that lost their survivability due to forest fire, pest insects, diseases, storm or large
                        </p>
                        <div class="alert alert-primary" role="alert">
                            Total Fund raised is Rs.158,038
                        </div>
                        <div class="alert alert-info" role="alert">
                        Total Number of Volunteers is 96
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                        <img src={clean2} className="float-left" alt="pic2"></img>
                    </div>
                    <div class="col">
                        <h2>Protecting our Environment</h2>
                        <p>This was a recently done community service project done by our team.Here we cleaned the forest where there many plastic and waste.
                            Forest cleaning means measures towards forest protection and improvement of forest conditions through removal of dead or fallen trees, twigs, limbs and trees that lost their survivability due to forest fire, pest insects, diseases, storm or large
                        </p>
                        <div class="alert alert-primary" role="alert">
                            Total Fund raised is Rs.123,470
                        </div>
                        <div class="alert alert-info" role="alert">
                            Total Number of Volunteers is 157
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                        <img src={clean3} className="float-left" alt="pic3"></img>
                    </div>
                    <div class="col">
                        <h2>Work as a Team</h2>
                        <p>This was done as a community service project where we could gather more than 100 people all over the country to clean the environment
                            The main goal of this project was to clean the environment and to build the spirit of working together as a team.</p>
                            <div class="alert alert-primary" role="alert">
                            Total Fund raised is Rs.289,650
                        </div>
                        <div class="alert alert-info" role="alert">
                        Total Number of Volunteers is 278
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;