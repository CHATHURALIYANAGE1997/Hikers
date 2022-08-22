import React from "react"
import articles from "./articles.css"

const ArticleBreadCrumb = () => {
    return (
        <div className="articlesbrowse">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <p>Browse Articles-  </p>
                    <li class="breadcrumb-item"><a href="#">All</a></li>
                    <li class="breadcrumb-item active" aria-current="page">North-Western Province</li>
                </ol>
            </nav>
        </div>
    );
}
export default ArticleBreadCrumb;