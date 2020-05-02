import React from 'react';

const DiamondFormElement = ({children,elementTitle}) => {
    return (
        <>
            <h1>{elementTitle}</h1>
            {children}
        </>
    );
};

export default DiamondFormElement;