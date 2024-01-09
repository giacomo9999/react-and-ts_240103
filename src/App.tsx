import { useState } from "react";

import Book from "./components/Book";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

type BookProps = {
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
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Book title={book.title} author={book.author} id={book.id}>
                <p>I Am A Book!</p>
              </Book>
            </li>
          );
        })}
      </ul>
      <button onClick={handleAddBook}>Add Book</button>
    </main>
  );
}
