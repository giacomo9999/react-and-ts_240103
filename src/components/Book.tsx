import { type PropsWithChildren } from "react";

type BookProps = PropsWithChildren<{ title: string }>;

export default function Book({ title, children }: BookProps) {
  return (
    <>
      <div className="container-inner">
        <h2>{title}</h2>
        <p>---</p>
        {children}
      </div>
      <button>Delete</button>
    </>
  );
}
