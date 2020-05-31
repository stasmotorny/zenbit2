import React, { useState } from 'react';

export const Counter = (props) => {
    const [counter, changeQuantity] = useState(1);

    let sendingCounter = (counter) => {
        props.sendCounter(counter)
        console.log("child" + ' ' + counter)
    }

    return (
        <div>
            <a onClick={() => changeQuantity(counter + 1)}>+</a>
            <span onChange={sendingCounter(counter)}>{counter}</span>
            <a onClick={() => changeQuantity(counter - 1)}>-</a>
        </div>
    )
}