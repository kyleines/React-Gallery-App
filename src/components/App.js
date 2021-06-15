import React, {Component} from "react";

// API Key
import myKey from "../config.js";

// App components
import Gallery from "./Gallery";


class App extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        this.getPhotos();
    }

    getPhotos = () => {
        const apiKey = myKey;
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=kitten&per_page=24&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    photos: responseData.photos.photo
                });
            })
            .catch(error => {
                console.log("Error fetching and parsing data: ", error);
            });
    }

    render() {
        return (
            <Gallery photos={this.state.photos} />
        );
    }
};

export default App;