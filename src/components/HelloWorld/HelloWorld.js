import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({message}){
    return <div>Hello {message}</div>;
}

HelloWorld.propTypes ={
    message: React.PropTypes.string,
};
export default HelloWorld;