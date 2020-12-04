import React, { useState } from "react";
import "./App.css";
import StateProvidor from "./providor/BookContext";
import CompBody from "./main/CompBody";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "자바야놀자", comp: "놀이출판사", price: 2000 },
    { id: 2, title: "뇌를 자극하는 java", comp: "놀이출판사", price: 2000 },
    { id: 3, title: "오라클", comp: "놀이출판사", price: 2000 },
    { id: 4, title: "HTML", comp: "놀이출판사", price: 2000 },
    { id: 5, title: "React", comp: "놀이출판사", price: 2000 },
  ]);
  const bookDelete = (id) => {
    const deleteBooks = books.filter((book) => {
      return book.id != id;
    });
    setBooks([...deleteBooks]);
  };

  const stateDate = { books, bookDelete };
  return (
    <div className="App">
      <StateProvidor.Provider value={stateDate}>
        <header className="App-header">
          <CompBody />
        </header>
      </StateProvidor.Provider>
    </div>
  );
}

export default App;
