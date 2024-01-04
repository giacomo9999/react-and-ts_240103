import { type ReactNode } from "react";

interface BookProps {
  title: string;
  children: ReactNode;
}

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
