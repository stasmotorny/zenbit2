import { Card } from 'antd';
import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addProductAction } from '../Redux/Actions/ProductAction'

export const CardItem = (element) => {

    const { Meta } = Card;

    const [isFlipped, onUpdateFlipped] = useState(false);

    const cardFlip = () => {
        onUpdateFlipped(!isFlipped)
    }

    const dispatch = useDispatch()

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={element.image} style={{ minHeight: '320px' }} />}
                onMouseEnter={cardFlip}
                extra={<button onClick={() => dispatch(addProductAction(element))}>add</button>}
            >
                <Meta title={element.name} />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={element.image} style={{ minHeight: '320px' }} />}
                onMouseLeave={cardFlip}
                extra={<button onClick={() => dispatch(addProductAction(element))}>add</button>}
            >
                <Meta title="back" />
            </Card>
        </ReactCardFlip>
    )
}