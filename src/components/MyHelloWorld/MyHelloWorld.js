import React from 'react';
import PropTypes from 'prop-types';

/** Второй React-компонент */
function MyHelloWorld({message}){
    return <div>Hello {message}</div>;
}

MyHelloWorld.propTypes ={
    /** Message to display */
    message: PropTypes.string,
};

MyHelloWorld.defaultProps={
    message: "World"
};

export default MyHelloWorld;