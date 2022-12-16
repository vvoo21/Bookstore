const Book = (book) => {
  const {
    genre, title, author,
  } = book;

  return (
    <div>
      <p>{genre}</p>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
