import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoriesList = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h4>{categoriesList}</h4>
      <button type="button" onClick={handleClick}>Check Status</button>
    </div>
  );
};

export default Categories;
