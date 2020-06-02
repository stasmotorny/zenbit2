const initialState = {
    loading: false,
    products: [],
    error: null
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                products: [...state.products, ...action.payload.products]
            }
        case "ADD_PRODUCT_STARTED":
            return {
                ...state,
                loading: true
            }
        case "ADD_PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

