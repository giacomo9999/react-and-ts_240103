import { PropsWithChildren } from "react";

type BookProps = PropsWithChildren<{
  title: string;
  author: string;
  id: number;
}>;

export default function Book({ title, author, children }: BookProps) {
  return (
    <article>
      <div className="container-inner">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button>Delete</button>
      </div>
      
    </article>
  );
}
