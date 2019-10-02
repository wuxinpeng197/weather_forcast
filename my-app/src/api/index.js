import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/index';

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('http://api.apixu.com/v1/forecast.json?key=2107f55280694def952115022190208&q=Sydney&days=7')
        .then(res => res.json())
        .then(res => {
            // console.log("data: ", res.location)
            if(res.error) {
                throw(res.error);
            }
           
            dispatch(fetchProductsSuccess(res.current,res.location));
          return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
            console.log("error: ", error)
        })
    }
}

export default fetchProducts;