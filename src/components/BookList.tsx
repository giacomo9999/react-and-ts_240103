import Book from "./Book";
import { BookProps } from "../App";

type BookListProps = {
  bookInfo: BookProps[];
  onDeleteBook: (id: number) => void;
};

export default function BookList({ bookInfo, onDeleteBook }: BookListProps) {
  return (
    <ul>
      {bookInfo.map((book) => {
        return (
          <li key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              id={book.id}
              onDeleteBook={onDeleteBook}
            />
          </li>
        );
      })}
    </ul>
  );
}
