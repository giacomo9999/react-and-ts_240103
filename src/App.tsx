import Book from "./components/Book.tsx";

export default function App() {
  return (
    <div className="container-outer">
      <h1>Books Of Jim</h1>
      <Book title="The Dying Earth">
        <p>Blah blah blah</p>
      </Book>
    </div>
  );
}
