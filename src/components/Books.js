import { useSelector, useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/api';
import Book from './Book';
import Form from './Form';
import '../styles/books.css';

const Books = () => {
  const dispatch = useDispatch();
  const booksList = useSelector((state) => state.books);
  return (
    <>
      <div className="container">
        <section className="books-container">
          <ul className="books">
            {booksList.map((book) => (
              <li className="book" key={book.id}>
                <div className="book-info">
                  <Book category={book.category} title={book.title} author={book.author} />
                  <div className="book-buttons">
                    <button type="button" className="comment">Comments</button>
                    <div className="vertical-divider" />
                    <button type="button" className="remove" onClick={() => dispatch(removeBookAsync(book.id))}>Remove</button>
                    <div className="vertical-divider" />
                    <button type="button" className="edit">Edit</button>
                  </div>
                </div>
                <div className="book-progress">
                  <div className="book-progress-bar">
                    <div className="book-progress-bar-fill" />
                  </div>
                  <div className="book-progress-percentage">
                    <p className="percentage">64%</p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <p className="current-chapter">CURRENT CHAPTER</p>
                    <p className="current-chapter-number">Chapter 17: &quot;A Lesson Learned&quot;</p>
                    <button type="button" className="update-progress">UPDATE PROGRESS</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <Form />
      </div>
    </>
  );
};

export default Books;
