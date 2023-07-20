import React, { useState } from "react"

export default function SearchGiphyForm({ getGiphySearch }) {
    // init state for search form; starts off empty
    const [giphyFormState, setGiphyFormState] = useState('');
    
    function handleChange(event) {
        // when input value changes, 
        // set the form state to input value
        setGiphyFormState(event.target.value);
    };

    function handleSubmit(event) {
        // prevent form from making http req
        event.preventDefault();

        // exec getGiphySearch prop passed from App.jsx
        getGiphySearch(giphyFormState);

        // reset input to initial state (blank)
        setGiphyFormState('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search for Gifs Here..."
                value={giphyFormState}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};