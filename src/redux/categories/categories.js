export const statuCheckAction = () => ({
  type: 'STATUS_CHECKED',
  payload: 'Under construction',
});
const initStateCategorie = [];

const categoriesReducer = (state = initStateCategorie, action) => {
  switch (action.type) {
    case 'STATUS_CHECKED':
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
