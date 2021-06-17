import React from "react";

// Component renders individual photos
const Photo = (props) => (
    <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
);

export default Photo;