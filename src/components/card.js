import React from 'react';
import { CardItem } from "./cardItem"
import { useSelector } from 'react-redux'

export const ProductCard = () => {
    const data = useSelector(state => state.counterReducer.products)

    return (
        <div>
            {data.map( element =>
                CardItem (element)
            )}
        </div>
    )
}