import React from "react";

const NotFound = () => {
    document.title = `No Photos Found`;
    return (
        <div className="not-found">
            <hr />
            <h2>No results found</h2>
            <p>That search did not return any results, please try again.</p>
            <hr />
            <br />
        </div>
    )
};

export default NotFound;