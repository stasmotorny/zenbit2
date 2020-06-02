import React from 'react';
import { CardItem } from "../cardItem";
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import 'antd/dist/antd.css';

export const ProductCard = () => {

    const data = useSelector(state => state.ProductReducer.products);

    return (
        <Row gutter={[16, 16]}>
            {data.map( (element, index) =>
                {
                    console.log("element", element);
                    return (
                        <CardItem element={element} key={index} />
                    )
                }
            )}
        </Row>
    )
}