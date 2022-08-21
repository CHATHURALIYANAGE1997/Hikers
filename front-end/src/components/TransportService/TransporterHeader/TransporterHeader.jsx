import React from "react"
import "./transporterheader.css"
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
// import authToken from "../../utils/authToken";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import authToken from "../../../utils/authToken";
const TransporterHeader = () => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }
    const auth = useSelector((state) => state.auth);



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top nb-container">

                <a class="navbar-brand" href="#">
                    <img src={logo} className="logo" alt="" width="70" height="40" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    {auth.isLoggedIn === true ?
                        <ul class="navbar-nav navbar-ul">
                            {/* {NavBarData.map((val, key) => {
                                return (
                                    <Link to={val.link} className="nb-list">
                                        <li key={key}
                                            className="nb-list"
                                            id={window.location.pathname == val.link ? "active" : ""} >
                                            <div className="nb-title">{val.title}</div></li>
                                    </Link>
                                );
                            })
                            } */}

                            <FontAwesomeIcon icon={faBell} className="admin-header-bell" />

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>



                            <div class="collapse navbar-collapse" id="navbar-list-4">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown">

                                        <Dropdown className="dropdown-btn">
                                            <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="30" height="30" class="rounded-circle"></img>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="d-flex flex-column">
                                                <Link to={"transportservice/profile"} className="w-100 dropdown-item">Profile</Link>
                                                <Link to={"/logout"} className="w-100 dropdown-item">Log-out</Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                        :
                        <ul class="navbar-nav navbar-ul-signup">
                            <Link to={"/travsignup"} className="nb-list">
                                <li className="nb-list">
                                    <div className="nb-title">
                                        Signup
                                    </div>
                                </li>
                            </Link>
                            <Link to={"/login"} className="nb-list">
                                <li className="nb-list">
                                    <div className="nb-title">
                                        Login
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    }
                </div>
            </nav >
        </div >
    );
}

export default TransporterHeader;