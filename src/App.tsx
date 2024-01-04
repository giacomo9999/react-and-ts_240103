import Book from "./components/Book.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

type BookGoal = { title: string; description: string; id: number };

export default function App() {
  const [books, addBook] = useState<BookGoal[]>([]);

  function handleAddBook() {
    addBook((prevBooks) => {
      const newBook: BookGoal = {
        title: "Critique Of Pure Reason",
        description: "a book about philosophy",
        id: Math.random(),
      };
      return [...prevBooks, newBook];
    });
  }

  return (
    <div className="container-outer">
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>My Reading Goals</h1>
      </Header>
      <button onClick={handleAddBook}>Add Goal</button>

      <h1>Books To Read</h1>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Book
                title={book.title}
                description={book.description}
                id={book.id}
              ></Book>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
