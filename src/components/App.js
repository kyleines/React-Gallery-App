import React, {useState} from "react";
import axios from "axios";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

// App components
import Search from "./Search";
import Nav from "./Nav";
import Gallery from "./Gallery";
import Error from "./Error";

// API Key
import myKey from "../config.js";
const apiKey = myKey;

const App = () => {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPhotos = (query) => {
        document.title = `Photos of ${query}`;
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                setPhotos(response.data.photos.photo);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching and parsing data: ", error);
            });
    }

    return (
        <BrowserRouter>
            <div className="container">
                <h1>React Gallery App</h1>
                <Search getPhotos={getPhotos} />
                <Nav />
                <Switch>
                    <Redirect exact from="/" to="/cats" />
                    <Route exact path="/:query">
                        <Gallery 
                            loading={loading}
                            photos={photos}
                            getPhotos={getPhotos} 
                        />
                    </Route>
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;