import React, { useState } from "react";
import "./styles.css";

const bookDictionary = {
  DSA: [
    {
      bookName: "Introduction to Algorithms by Thomas H. Cormen",
      rating: "9 / 10"
    },
    {
      bookName: "Algorithms by Robert Sedgewick & Kevin Wayne",
      rating: "8.5 / 10"
    },
    {
      bookName: "The Algorithm Design Manual by Steve S. Skiena",
      rating: "8 / 10"
    },
    { bookName: "Algorithm for Interviews", rating: "7 / 10" }
  ],
  Networking: [
    {
      bookName: "Network Warrior (2nd Edition)",
      rating: "9 / 10"
    },
    {
      bookName: "Routing TCP/IP, Volume 1 (2nd Edition)",
      rating: "8.5 / 10"
    },
    {
      bookName: "Routing TCP/IP, Volume II (2nd Edition)",
      rating: "8 / 10"
    }
  ],
  Architecture: [
    {
      bookName: "Computer Organization and Design MIPS Edition",
      rating: "9.5 / 10"
    },
    { bookName: "Computer Architecture by John L. Hennessy", rating: "9 / 10" },
    {
      bookName: "Structured Computer Organization by Andrew S. Tanenbaum",
      rating: "8 / 10"
    }
  ]
};
var genres = Object.keys(bookDictionary);

export default function App() {
  const [selectedGenre, setGenre] = useState("DSA");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 id="nav">📚goodbooks</h1>
      <p>Checkout my favourite books. Select a genre to get started.</p>

      <div>
        {genres.map((currentGenre) => {
          return (
            <button
              onClick={() => genreClickHandler(currentGenre)}
              key={currentGenre}
            >
              {currentGenre}
            </button>
          );
        })}
      </div>
      <hr style={{ margin: "0% 10% 0% 10%" }} />
      <div>
        <ul style={{ paddingInlineStart: "0px" }}>
          {bookDictionary[selectedGenre].map((book) => {
            return (
              <li key={book.bookName}>
                <div style={{ fontSize: "larger" }}> {book.bookName} </div>
                <div style={{ fontSize: "smaller", padding: "10px" }}>
                  {" "}
                  Rating: {book.rating}{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
