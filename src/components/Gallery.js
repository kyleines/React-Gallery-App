import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

// Import components
import Photo from "./Photo";
import NotFound from "./NotFound";

// Component that renders the list of photos
const Gallery = ({getPhotos, photos, loading}) => {

    // Uses URL paramaters to request new photo list
    // useEffect() stops the fetch loop by only rendering on changes
    let query = useParams().query;
    useEffect(() => {
        getPhotos(query);
        // eslint-disable-next-line     <-- Line necessary to get rid of console warning
    }, [query]);

    let component = null;
    component = photos.map(photo => (
        <Photo 
            key={photo.id} 
            server={photo.server}
            id={photo.id}
            secret={photo.secret}    
        />
    ))

    // If no photos on search, displays NotFound component
    const render = () => {
        if (photos.length) {
            return <ul>{component}</ul>
        } else {
            return <NotFound />
        }
    }

    // Shows "Loading..." while data is being fetched
    return (
        <div className="photo-container">
            <h2>{query}</h2>
            {
                (loading) ? <h1>Loading...</h1> : render()
            }
        </div>
    );
};

export default Gallery;