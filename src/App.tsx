import { useState } from "react";

import BookList from "./components/BookList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import NewBook from "./components/NewBook";

export type BookProps = {
  title: string;
  author: string;
  id: number;
};

export default function App() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [addNewPanelOpen, toggleAddNewPanelOpen] = useState<boolean>(false);

  function handleAddBook() {
    setBooks((prevBooks) => {
      const newBook: BookProps = {
        id: Math.random(),
        title: "New Book",
        author: "Gern Blanston",
      };
      return [...prevBooks, newBook];
    });
    console.log("App.tsx adding book...");
  }

  function handleDeleteBook(id: number) {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => {
        return book.id !== id;
      })
    );
  }

  return (
    <main className="container-outer">
      <Header image={{ src: goalsImg, alt: "picture of some books" }}>
        <h1>Books To Read</h1>
      </Header>
      <button onClick={() => toggleAddNewPanelOpen(!addNewPanelOpen)}>
        Add Book
      </button>
      {addNewPanelOpen ? (
        <NewBook addBook={handleAddBook} togglePanel={toggleAddNewPanelOpen} />
      ) : (
        <br />
      )}

      <BookList bookInfo={books} onDeleteBook={handleDeleteBook} />
    </main>
  );
}
