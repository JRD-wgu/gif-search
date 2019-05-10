import React from "react";
import GifCard from "./GifCard";
import '../styles/App.css';

// create component(stateless) that accepts array of Gifs and maps through the array,
// displaying one GifCard for each Gif returned
const GifList = (props) => {
    const gifItems = props.gifs.map((image) => {
        return <GifCard key={image.id} gif={image}/>
    });

    return (
        <ul className="grid-container"> {gifItems} </ul>
    );
};







export default GifList;