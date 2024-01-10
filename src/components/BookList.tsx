import Book from "./Book";
import { BookProps } from "../App";

type BookListProps = {
  bookInfo: BookProps[];
  onDelete: (id: number) => void;
};

export default function BookList({bookInfo, onDelete}: BookListProps) {
  return (
    <ul>
      {bookInfo.map((book) => {
        return (
          <li key={book.id}>
            <Book title={book.title} author={book.author} id={book.id}>
              <p>I Am A Book!</p>
            </Book>
          </li>
        );
      })}
    </ul>
  );
}
