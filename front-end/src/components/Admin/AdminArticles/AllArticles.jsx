import React, { useState } from 'react';
import './adminarticles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './ArticleShowModal';
import ArticleEditModal from './ArticleEditModel';
import ArticleAddModal from './ArticleAddModal';
import {Link} from "react-router-dom";

function AllArticles() {

    const [modalAdd, setModalAdd] = React.useState(false);

    const [modalShow, setModalShow] = React.useState(false);

    // const [modalEdit, setModalEdit] = React.useState(false);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="d-flex flex-column w-50 all-articles-container">

            <div className="d-flex flex-row justify-content-between mb-2">
                <h5>Articles</h5>
                <Link to={"/admin/addarticle"}><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Article</button></Link>
            </div>
            <div className="input-group w-100 justify-content-center mb-3">
                <div className="form-outline w-75 mr-auto ml-auto">
                    <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
                </div>
                <button className="btn btn-primary history-search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="d-flex flex-row mt-2 all-articles-headings">
                <span className="w-50">Article</span>
                <span className="w-25">Posted Date</span>
                <span className="w-25">Action</span>
            </div>
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to delete this article?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Bathalegala Article</span>
                    <span>Sabaragamuwa Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">08/02/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Hanthana Article</span>
                    <span>Central Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">18/01/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Adara Kanda Article</span>
                    <span>Central Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">06/12/2021</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Adam's Peak Article</span>
                    <span>Sabaragamuwa Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">01/12/2021</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Nickkles Article</span>
                    <span>North Western Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">08/10/2021</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Devil's Stair-Case Article</span>
                    <span>Uva Province</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />                
                </div>
                <span className="w-25 mt-auto mb-auto">08/08/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
        </div>
    );
}

export default AllArticles;