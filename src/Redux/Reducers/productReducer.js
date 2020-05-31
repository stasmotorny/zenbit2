let initialState = {
    card: []
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            if (Array.isArray(state.card) && state.card.length) {
                let findResult = state.card.find(product => product.id === action.id)
                if (findResult === undefined) {
                    let cardItem = action.selectedProduct;
                    let cardItemModifyed = Object.assign(cardItem, {quantity: 1});
                    return {
                        ...state,
                        card: [...state.card, cardItemModifyed]
                    }
                } else {
                    return {
                        ...state,
                        card: state.card.map(product => product.id === action.id ? {
                            ...product,
                            quantity: product.quantity + 1,
                            total: (product.quantity + 1) * product.price
                        } : product)
                    }
                }
            } else {
                let cardItem = action.selectedProduct;
                let cardItemModifyed = Object.assign(cardItem, {quantity: 1});
                let total = Object.assign(cardItemModifyed, {total: cardItemModifyed.quantity * cardItemModifyed.price})
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
                    quantity: product.quantity - 1,
                    total: (product.quantity - 1) * product.price
                } : product)
            }

        default: return state
    }
}

