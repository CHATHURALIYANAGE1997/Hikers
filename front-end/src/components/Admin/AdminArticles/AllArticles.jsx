import React from "react";
import './adminarticles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const AllArticles = () => {
    return (
        <div className="d-flex flex-column w-50 all-articles-container">
            <div className="d-flex flex-row justify-content-between mb-2">
                <h5>Articles</h5>
                <button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Transporter</button>
            </div>
            <div className="input-group w-100 justify-content-center mb-3">
                <div className="form-outline w-75 mr-auto ml-auto">
                    <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
                </div>
                <button type="button" className="btn btn-primary history-search-btn">
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
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row all-articles-article">
                <div className="w-50 d-flex flex-column">
                    <span className="all-articles-title">Dolukanda Article</span>
                    <span>North Western Province</span>
                    <span className="all-articles-see-more-btn">see more..</span>
                </div>
                <span className="w-25 mt-auto mb-auto">08/04/2022</span>
                <div className="w-25 all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
        </div>
    );
}

export default AllArticles;