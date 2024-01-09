import Book from "./Book";
import { BookProps } from "../App";

type BookListProps = {
  bookData: BookProps[];
};

export default function BookList(bookListData: BookListProps) {
  return (
    <ul>
      {bookListData.bookData.map((book) => {
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
