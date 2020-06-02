import { Card } from 'antd';
import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAction } from '../Redux/Actions/cardAction';
import { Col } from 'antd';

export const CardItem = (element) => {

    const { Meta } = Card;

    const [isFlipped, onUpdateFlipped] = useState(false);

    const cardFlip = () => {
        onUpdateFlipped(!isFlipped)
    }

    const dispatch = useDispatch()

    console.log("maped", element)

    const gridStyle = {
        width: '100%',
        textAlign: 'center',
    };

    return (
        <Col className="gutter-row" span={8}>
            <ReactCardFlip isFlipped={isFlipped}>
                <Card
                    hoverable
                    style={gridStyle}
                    cover={<img alt="example" src={element.element.image} style={{ minHeight: '90px' }} />}
                    onMouseEnter={cardFlip}
                    extra={<button onClick={() => dispatch(addProductAction(element))}>add</button>}
                >
                    <Meta title={element.element.name} />
                </Card>

                <Card
                    hoverable
                    style={gridStyle}
                    cover={<img alt="example" src={element.element.image} style={{ minHeight: '90px' }} />}
                    onMouseLeave={cardFlip}
                    extra={<button onClick={() => dispatch(addProductAction(element))}>add</button>}
                >
                    <Meta title="Price:" description={element.element.price} />
                </Card>
            </ReactCardFlip>
        </Col>
    )
}