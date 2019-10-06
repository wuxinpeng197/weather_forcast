import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../actions/index';
import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO ,UPDATE_TODO} from '../actions/city';
// import { combineReducers } from 'redux';

const initialState = {
    pending: false,
    // weather:'',
    // location:'',
    data:[],
    error: 'could not fetch data',
    1: { id: 1, city: 'Todo task 1', completed: false ,editable:false },
    2: { id: 2, city: 'Todo task 2', completed: false,editable:false },
    3: { id: 3, city: 'Todo task 3', completed: false,editable:false }
};

// const initialState2 = {
//     1: { id: 1, city: 'Todo task 1', completed: false ,editable:false },
//     2: { id: 2, city: 'Todo task 2', completed: false,editable:false },
//     3: { id: 3, city: 'Todo task 3', completed: false,editable:false }
// };

let id = 4;

const createTodo = text => ({ id: ++id, text, completed: false ,editable:false });

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            const weather = action.weather;
            const location = action.location;
            const obj = {
                weather,
                location
            };

            return {
                ...state,
                pending: false,
                data: [obj].concat(state.data),
                location: action.location
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        case CREATE_TODO: {
            const todo = createTodo(action.text);
            return { ...state, [todo.id]: todo };
        }
        case TOGGLE_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, completed: !todo.completed } };
        }
        case DELETE_TODO: {
            const _state = { ...state };
            delete _state[action.id];
            return _state;
        }
        case EDIT_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, editable: true } }
        }
        case UPDATE_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, text:action.text, editable: false } }
        }

        default:
            return state;
    }
}

export const getProducts = state => state.data;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;



// function cityReducer(state = initialState2, action){
//     switch (action.type) {
//         case CREATE_TODO: {
//             const todo = createTodo(action.text);
//             return { ...state, [todo.id]: todo };
//         }
//         case TOGGLE_TODO: {
//             const todo = state[action.id];
//             return { ...state, [todo.id]: { ...todo, completed: !todo.completed } };
//         }
//         case DELETE_TODO: {
//             const _state = { ...state };
//             delete _state[action.id];
//             return _state;
//         }
//         case EDIT_TODO: {
//             const todo = state[action.id];
//             return { ...state, [todo.id]: { ...todo, editable: true } }
//         }
//         case UPDATE_TODO: {
//             const todo = state[action.id];
//             return { ...state, [todo.id]: { ...todo, text:action.text, editable: false } }
//         }
//         default: {
//             return state;
//         }
//     }
// }

// const reducer = combineReducers({
//     A: cityReducer(),
//     B: productsReducer()
// });
//
// export default reducer;
//
// console.log(reducer);