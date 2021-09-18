import React from 'react';

const Config = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '5px' }}>
            <ul>
                <li>price: {props.price}</li>
                <li>steps: {props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;