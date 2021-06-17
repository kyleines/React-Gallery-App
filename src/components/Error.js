import React from "react";

// Component renders when the URL matches no routes
const Error = () => {
    document.title = `404`;
    return (
        <div className="photo-container">
            <div className="not-found">
                <hr />
                <h2>404</h2>
                <p>The page you are trying to view does not exist. 
                <br />
                Please select a topic above or try the search bar.</p>
                <hr />
                <br />
            </div>
        </div>
    )
};

export default Error;