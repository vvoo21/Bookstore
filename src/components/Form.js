import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/api';

const Form = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleInput = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addBookAsync({
      item_id: uuidv4(),
      title: newBook.title,
      category: newBook.category,
      author: newBook.author,
    }));
    setNewBook({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <section className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" type="text" name="title" value={newBook.title} onInput={handleInput} placeholder="Book title" aria-label="title" required />
        <input id="author" type="text" name="author" value={newBook.author} onInput={handleInput} placeholder="Author" aria-label="author" required />
        <select name="category" id="category" value={newBook.category} onInput={handleInput} placeholder="category" aria-label="category" required>
          <option value="" disabled>Category</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
          <option value="Mystery">Mystery</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Magical Realism">Magical Realism</option>
          <option value="Children">Children’s</option>
          <option value="Biography">Biography</option>
          <option value="Food & Drink">Food & Drink</option>
          <option value="Self-Help">Self-help</option>
          <option value="Economy">Economy</option>
          <option value="History">History</option>
        </select>
        <button type="submit" onClick={handleClick}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default Form;
