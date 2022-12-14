export const statuCheckAction =()=> ({
  type:'STATUS_CHECKED'
})
const initStateCategorie =[];

const categoriesReducer = (state = initStateCategorie,action)=>{
  switch (action.type) {
    case statuCheckAction : return '';
    default: return state;
  }
}

export default categoriesReducer;