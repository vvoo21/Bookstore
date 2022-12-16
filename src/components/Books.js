import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);
  return (
    <>
      <div className="book-list-container">
        <ul className="book-list">
          {booksList.map((book) => (
            <li key={book.id}>
              <Book genre={book.genre} title={book.title} author={book.author} />
              <div>
                <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
