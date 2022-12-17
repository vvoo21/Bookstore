const Book = (book) => {
  const {
    category, title, author,
  } = book;

  return (
    <div>
      <p className="book-category">{category}</p>
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
    </div>
  );
};

export default Book;
