//actions creator
export const addBookAction = (bookObject) =>({type:'BOOK_ADDED', payload:bookObject});
export const removeBookAction =(bookID) => ({type:'BOOK_REMOVED', payload:bookID});
const initStateAction ={type:'STATE_INITIALIZED'};
const initialState = [];
//reducer
const bookReducer = (state = initialState,action)=>{
  switch (action.type){
    case addBookAction: {
      return [
        ...state,
        action.payload
        ]
    };
    case removeBookAction :return state.map((book)=>{
      if(book.id!=action.payload){
        return book;
      }
    });
    case initStateAction:return initialState;
    default: return state;
  }
}

export default bookReducer;