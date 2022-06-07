import React from "react";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("searching...");
  }

  function handleKeywordChange(event) {
    console.log(event);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-decoration-underline mt-2">Dictionary</h1>
      <h2 className="fs-4 text m-4">
        What's the word you want to know more about?
      </h2>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
