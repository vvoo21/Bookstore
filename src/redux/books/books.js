// Actions
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';
const LOAD_BOOKS = 'books/LOAD_BOOKS';

const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case LOAD_BOOKS: {
      const bookArray = [];
      Object.entries(action.books).forEach(([key, value]) => {
        bookArray.push({
          id: key,
          title: value[0].title,
          category: value[0].category,
          author: value[0].author,
        });
      });
      return bookArray;
    }
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

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  books,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default booksReducer;
