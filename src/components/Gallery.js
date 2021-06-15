import React from "react";
import Photo from "./Photo";

const Gallery = (props) => {

    const photoList = props.photos;
    let photos = photoList.map(photo => (
        <Photo 
            key={photo.id} 
            server={photo.server}
            id={photo.id}
            secret={photo.secret}    
        />
    ));

    return (
        <div className="photo-container">
            <h2>Photos</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
};

export default Gallery;