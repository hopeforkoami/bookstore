import bookApi from '../../api/bookApi';

// actions creator
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
const BOOK_GETTED = 'BOOK_GETTED';
export const addBookAction = (bookObject) => async (dispatch) => {
  bookApi.addNewBook(bookObject);
  dispatch({
    type: 'BOOK_ADDED',
    payload: bookObject,
  });
};
export const removeBookAction = (bookID) => async (dispatch) => {
  bookApi.removeBook(bookID);
  dispatch({
    type: 'BOOK_REMOVED',
    payload: bookID,
  });
};

export const getBooksAction = () => async (dispatch) => {
  const allBooks = await bookApi.getBooks();
  dispatch({
    type: BOOK_GETTED,
    payload: allBooks,
  });
};
const initialState = [];
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
    case BOOK_GETTED: return action.payload;
    default: return state;
  }
};

export default bookReducer;
