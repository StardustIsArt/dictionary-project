import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
 

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
   
  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //Documentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <h1 className="text-decoration-underline mt-2">Dictionary</h1>
      <h2 className="fs-4 text m-4">
        What's the word you want to know more about?
      </h2>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
