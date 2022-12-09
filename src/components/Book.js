const Book = (book) => {
  const { title, author } = book;

  return (
    <li>
      <div>
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
