// Actions
const CHECK_STATUS = 'categories/CHECK_STATUS';

const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action Creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
