import { PropsWithChildren } from "react";

type BookProps = PropsWithChildren<{
  title: string;
  author: string;
  id: number;
  onDeleteBook: (id: number) => void;
}>;

export default function Book({ title, author, id, onDeleteBook }: BookProps) {
  return (
    <article>
      <div className="container-inner">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button onClick={() => onDeleteBook(id)}>Delete</button>
      </div>
    </article>
  );
}
