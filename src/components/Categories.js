import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import '../styles/categories.css';

const Categories = () => {
  const categoriesList = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container">
      <h2 className="categories-title">{categoriesList}</h2>
      <button className="blue-buttons check-add-button" type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
};

export default Categories;
