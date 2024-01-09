export default function Book({
  title,
  author,
}: {
  title: string;
  author: string;
}) {
  return (
    <article>
      <div className="container-inner">
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <button>DELETE</button> 
    </article>
  );
}
