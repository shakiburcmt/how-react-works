import React from 'react';

const Display = (props) => {
    return (
        <div style={{border:'2px solid',margin:'5px'}}>
            <h2>{props.name}</h2>
            <p>So far steps today: {props.steps}</p>
        </div>
    );
};

export default Display;