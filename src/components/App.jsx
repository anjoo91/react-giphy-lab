import { useState, useEffect } from 'react';
import SearchGiphyForm from './SearchGiphyForm/SearchGiphyForm';
import GiphyInfo from './GiphyInfo/GiphyInfo';
import './App.css';

export default function App() {
  // init state for query
  const [query, setQuery] = useState('');
  // init state for gif (response from api)
  const [giphy, setGiphy] = useState('')

  // function to generate a random gif
  useEffect(() =>
    async function getRandomGif() {
      try{
        // api response from random endpoint
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/random?api_key=Bwzk5BEIDbZ0fjuj5xSYv2xlxlbfIA7v`
        );
        const data = await response.json();
        // console.log(data);
        // update giphy state with api response data
        setGiphy(data.data);
      } 
      catch(error) {
        console.log(error);
      };
  }, []); // run this when the page is initially rendered

  // function to generate gif based on query param
  async function getGiphySearch(query) {
    try{
      // api response from search endpoint
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Bwzk5BEIDbZ0fjuj5xSYv2xlxlbfIA7v&q=${query}`
      );
      const data = await response.json();
      // update giphy state with api response data
      setGiphy(data.data[0]);
    } 
    catch(error) {
      console.log(error);
    };
  };

  return (
    <>
    <h1>Giphy</h1>
    <SearchGiphyForm getGiphySearch={getGiphySearch}/>
    {giphy ? (<GiphyInfo giphy={giphy}/>):(<p>Loading...</p>)}
    </>
  );
};