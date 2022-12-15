const Book = (book) => {
  const { genre, title, author } = book;

  return (
    <li>
      <div>
        <p>{genre}</p>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button type="button">Remove</button>
      </div>
    </li>
  );
};

export default Book;
