import React from 'react';
import '../styles/App.css';
// stateless component that receives gif's image url and applies as the source, creating a list item for each gif in array
// that's returned by the api request
const GifCard = (image) => {
    return (
        <li className="grid-item">
            <a target="_blank" rel="noopener noreferrer" href={image.gif.url}>
                <img id="gif" src={image.gif.images.original.url} alt="gifs" /> </a>

        </li>
    )
};

export default GifCard;