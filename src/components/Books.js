import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/api';
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
              <Book category={book.category} title={book.title} author={book.author} />
              <div>
                <button type="button" onClick={() => dispatch(removeBookAsync(book.id))}>Remove</button>
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
