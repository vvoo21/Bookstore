import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';

const books = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: uuidv4(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: uuidv4(),
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: uuidv4(),
  },
];

const Books = () => {
  const [state] = useState(books);
  return (
    <>
      <div className="book-list-container">
        <ul className="book-list">
          {state.map((book) => (
            <Book key={book.id} title={book.title} author={book.author} />
          ))}
        </ul>
      </div>
      <Form />
    </>
  );
};

export default Books;
