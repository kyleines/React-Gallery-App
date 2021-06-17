import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Photo from "./Photo";
import NotFound from "./NotFound";

const Gallery = ({getPhotos, photos, loading}) => {

    let query = useParams().query;
    useEffect(() => {
        getPhotos(query);
        // eslint-disable-next-line
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

    const render = () => {
        if (photos.length) {
            return <ul>{component}</ul>
        } else {
            return <NotFound />
        }
    }

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