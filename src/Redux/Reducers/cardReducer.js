let initialState = {
    card: []
}

export const CardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            if (Array.isArray(state.card) && state.card.length) {
                let findResult = state.card.find(product => product.id === action.selectedProduct.element.id)
                if (findResult === undefined) {
                    let cardItem = action.selectedProduct.element;
                    let cardItemModifyed = {...cardItem, quantity: 1, };
                    let total = {...cardItemModifyed, total: cardItemModifyed.quantity * cardItemModifyed.price};
                    return {
                        ...state,
                        card: [...state.card, total]
                    }
                } else {
                    return {
                        ...state,
                        card: state.card.map(product => product.id === action.selectedProduct.element.id ? {
                            ...product,
                            quantity: product.quantity + 1,
                            total: (product.quantity + 1) * product.price
                        } : product)
                    }
                }
            } else {
                let cardItem = action.selectedProduct.element;
                let cardItemModifyed = {...cardItem, quantity: 1};
                let total = {...cardItemModifyed, total: cardItemModifyed.quantity * cardItemModifyed.price}
                return {
                    ...state,
                    card: [...state.card, total]
                }
            }

        case "INCREASE_QUANTITY":
            return {
                ...state,
                card: state.card.map(product => product.id === action.id ? {
                    ...product,
                    quantity: product.quantity + 1,
                    total: (product.quantity + 1) * product.price
                } : product)
            }

        case "DECREASE_QUANTITY":
            return {
                ...state,
                card: state.card.map(product => product.id === action.id ? {
                    ...product,
                    quantity: Math.max(product.quantity - 1, 1),
                    total: Math.max(product.quantity - 1, 1) * product.price
                } : product)
            }

        case "DELETE_PRODUCT":
            return {
                ...state,
                card: state.card.filter(product => product.id !== action.id)
            }

        default: return state
    }
}

