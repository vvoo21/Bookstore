const Book = (book) => {
  const {
    category, title, author,
  } = book;

  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
