import React from 'react';

const Conditional = ({ condition, children }) => {
    const childrenArray = React.Children.toArray(children);
    return (condition ? childrenArray[0] : (childrenArray[1] || null));
}

export default Conditional;