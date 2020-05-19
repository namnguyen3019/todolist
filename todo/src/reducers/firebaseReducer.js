//Array of items
const initialState = [];

 const fetchData = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DATA":
            return {...state, itemList: action.payload}
        default:
            return state;    
    }
}

export default fetchData;
