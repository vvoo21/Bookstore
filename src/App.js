import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Categories from './components/Categories';
import { loadBooksAsync } from './redux/books/api';

const App = () => {
  const dispatch = useDispatch();
  dispatch(loadBooksAsync());

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default App;
