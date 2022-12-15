// actions creator
export const addBookAction = (bookObject) => ({ type: 'BOOK_ADDED', payload: bookObject });
export const removeBookAction = (bookID) => ({ type: 'BOOK_REMOVED', payload: bookID });
const initStateAction = { type: 'STATE_INITIALIZED' };
const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    nbreChp: 25,
    crtChp: 10,
    category: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    nbreChp: 40,
    crtChp: 8,
    category: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Test 3 Book',
    author: 'test3 Author',
    nbreChp: 15,
    crtChp: 5,
    category: 'test Category',
  },
  {
    id: 4,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    nbreChp: 60,
    crtChp: 0,
    category: 'Economy',
  },
];
// reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBookAction: {
      return [
        ...state,
        action.payload,
      ];
    }
    case removeBookAction: return state.filter((book) => book.id !== action.payload);
    case initStateAction: return initialState;
    default: return state;
  }
};

export default bookReducer;
