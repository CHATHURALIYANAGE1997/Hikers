import React from "react"
import articles from "./articles.css"

const articleSearchbar = () => {
    return (
        <div className="mt-1 pl-5 p-1 search-container">
            <form class="form-inline articlesform">
                <span className="articlesSearchbutton"><i class="fa fa-search"></i></span>
                <input class="articlesSearchfield form-control-sm ml-3 mt-3 w-75" type="text" placeholder="Search by the province"
                    aria-label="Search" />
                <button type="button" className="btn btn-primary searchbtn" >search</button>
            </form>
        </div>
    );
}

export default articleSearchbar;