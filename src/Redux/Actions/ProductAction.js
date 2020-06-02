export const getProducts = () => {
    return dispatch => {
        dispatch(getProductsStarted());

        fetch('https://shopserver.firebaseapp.com/get-products')
            .then((response) => {
                return response.json();
            })
            .then(response => {
                dispatch(getProductsSuccess(response));
            })
            .catch(err => {
                dispatch(getProductsFailure(err.message));
            });
    }
}

const getProductsSuccess = products => ({
    type: "ADD_PRODUCT_SUCCESS",
    payload: {
        ...products
    }
});

const getProductsStarted = () => ({
    type: "ADD_PRODUCT_STARTED"
});

const getProductsFailure = error => ({
    type: "ADD_PRODUCT_FAILURE",
    payload: {
        error
    }
});