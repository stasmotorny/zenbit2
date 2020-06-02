export const addProductAction = (element) => ({
    type: 'ADD_PRODUCT',
    id: element.id,
    selectedProduct: element
})

export const increaseQuantity = (record) => ({
    type: 'INCREASE_QUANTITY',
    id: record.id
})

export const decreaseQuantity = (record) => ({
    type: 'DECREASE_QUANTITY',
    id: record.id
})

export const deleteProduct = (record) => ({
    type: 'DELETE_PRODUCT',
    id: record.id
})
