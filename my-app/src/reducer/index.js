import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/index';

const initialState = {
    pending: false,
    // weather:'',
    // location:'',
    data:[],
    error: 'could not fetch data'
}

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
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.data;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error