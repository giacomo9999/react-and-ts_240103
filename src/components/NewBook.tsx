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
    <div className="container-inner">
      <form className="h-form">
        <label className="h-label" htmlFor="book">
          New Book
        </label>
        <input className="h-input" id="book" type="text" />
        <br />
        <label className="h-label" htmlFor="author">
          Author
        </label>
        <input className="h-input" id="author" type="text" />
        <br />
        <button className="h-btn" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
}
