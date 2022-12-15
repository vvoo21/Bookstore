import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <>
      <div className="book-list-container">
        <ul className="book-list">
          {booksList.map((book) => (
            <Book key={book.id} genre={book.genre} title={book.title} author={book.author} />
          ))}
        </ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
