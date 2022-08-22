import React from "react";
import AddArticleForm from "../components/Admin/AdminArticles/AddArticleForm";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "./NotFoundPage";


const AdminAddArticle = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    if (auth.isLoggedIn === true && auth.role === "Admin") {
        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
                <div className="d-flex flex-row w-100 admin-page-content">
                    <AdminNav />
                    <div className="d-flex flex-column home-container">
                        <div className="d-flex flex-row">
                            <Form className='d-flex flex-column w-75 add-article-form'>
                            <Link to={"/admin/articles"} className="back-btn-link">
                            <button type="button" className="back-btn">
                                <FontAwesomeIcon icon={faArrowLeft} className="back-btn-icon" />
                            </button>
                            </Link>
                                <h4>Article Form</h4>
                                <div className="add-article-form-container">
                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                                        <Form.Label className="add-articles-label">Mountain Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter mountain" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control type="text" placeholder="Province" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="textarea" className="add-article-form-description" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Upload Photos</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='w-100'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        {return <div><NotFoundPage/></div>}
    }
}

export default AdminAddArticle;