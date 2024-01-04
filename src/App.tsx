import Book from "./components/Book.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

export default function App() {
  return (
    <div className="container-outer">
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>My Reading Goals</h1>
      </Header>

      <h1>Books Of Jim</h1>
      <Book title="The Dying Earth">
        <p>Blah blah blah</p>
      </Book>
    </div>
  );
}
