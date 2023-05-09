import React from 'react';

const DemoOutput = (props) => {
    return (
        <p>{props.show ? 'This new' : ''}</p>
    );
};

export default React.memo(DemoOutput);
