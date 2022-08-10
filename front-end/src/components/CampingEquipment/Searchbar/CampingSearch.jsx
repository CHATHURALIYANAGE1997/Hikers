import React from "react";
import './campingSearch.css';

const CampingSearch = () => {
    return (
        <div className="input-group">
            <input type="search" 
                   class="form-control rounded" 
                   placeholder="Search Category" 
                   aria-label="Search" 
                   aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary">search</button>
        </div>
                
    );
}
export default CampingSearch;