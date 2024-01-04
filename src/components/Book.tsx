import { type PropsWithChildren } from "react";

type BookProps = PropsWithChildren<{
  title: string;
  description: string;
  id: number;
}>;

export default function Book({ title, description }: BookProps) {
  return (
    <>
      <div className="container-inner">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <button>Delete</button>
      </div>
    </>
  );
}
