import React from 'react';

const Book = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.author}</h4>
        </div>
    );
};

export default Book;