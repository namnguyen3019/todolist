import { Todo } from '../actions/types';
import { addTodo } from '../actions';

const initialState = {
    item: {}
}

const TodoReducer = (state=initialState, action) =>{
    switch(action.type){
        case Todo:
            return state;
        default:
            return state;    
    }
}

export default TodoReducer;