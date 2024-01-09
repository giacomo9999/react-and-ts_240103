import { useState } from "react";

import BookList from "./components/BookList";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

export type BookProps = {
  title: string;
  author: string;
  id: number;
};

export default function App() {
  const [books, setBooks] = useState<BookProps[]>([]);

  function handleAddBook() {
    setBooks((prevBooks) => {
      const newBook: BookProps = {
        id: Math.random(),
        title: "New Book",
        author: "Gern Blanston",
      };
      return [...prevBooks, newBook];
    });
  }

  return (
    <main className="container-outer">
      <Header image={{ src: goalsImg, alt: "picture of some books" }}>
        <h1>Books To Read</h1>
      </Header>
      <BookList bookData={books} />
      <button onClick={handleAddBook}>Add Book</button>
    </main>
  );
}
