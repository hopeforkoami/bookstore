import { v4 } from 'uuid';

// actions creator
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
export const addBookAction = (bookObject) => ({ type: 'BOOK_ADDED', payload: bookObject });
export const removeBookAction = (bookID) => ({ type: 'BOOK_REMOVED', payload: bookID });
const initialState = [
  {
    id: v4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    nbreChp: 25,
    crtChp: 10,
    category: 'Action',
  },
  {
    id: v4(),
    title: 'Dune',
    author: 'Frank Herbert',
    nbreChp: 40,
    crtChp: 8,
    category: 'Science Fiction',
  },
  {
    id: v4(),
    title: 'Test 3 Book',
    author: 'test3 Author',
    nbreChp: 15,
    crtChp: 5,
    category: 'test Category',
  },
  {
    id: v4(),
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
    case BOOK_ADDED: {
      return [
        ...state,
        action.payload,
      ];
    }
    case BOOK_REMOVED: return state.filter((book) => book.id !== action.payload);
    default: return state;
  }
};

export default bookReducer;
