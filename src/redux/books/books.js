// Actions
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 0,
  },
  {
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    id: 1,
  },
  {
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 2,
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const filterBooks = state.filter((book) => book.id !== action.bookId);
      return filterBooks;
    }
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default booksReducer;
