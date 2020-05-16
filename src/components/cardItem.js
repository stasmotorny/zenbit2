import { Card } from 'antd';
import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from 'react';


export const CardItem = (element) => {

    const { Meta } = Card;

    const [isFlipped, onUpdateFlipped] = useState(false);

    const onClick = () => {
        onUpdateFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={element.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title={element.name} />
            </Card>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={element.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title="back" />
            </Card>
        </ReactCardFlip>
    )
}