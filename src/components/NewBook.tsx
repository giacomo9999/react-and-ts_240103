import { FormEvent } from "react";

type NewBookProps = {
  addBook: (id: number) => void;
};
export default function NewBook({ addBook }: NewBookProps) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addBook(-999);
    console.log("NewBook.tsx handling submit...");
  }
  return (
    <form>
      <p>
        <label htmlFor="book">New Book</label>
        <input id="book" type="text" />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" />
      </p>
      <p>
        <button onClick={handleSubmit}>Add Book</button>
      </p>
    </form>
  );
}
