import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to eonforce consistency */
function TextInput({
    htmlId, name, label, type="text", required=false, 
    onChange, placeholder, value, error, children, ...props
}){
    return (
        <div style={{maringBottom: 16}}>
            <Label htmlFor={htmlId} label={label} required={required}/>
            <input id={htmlId} type={type} name={name} placeholder={placeholder} value={value}
                   onChange={onChange} style={error && {border: 'solid 1px red'}}
                   {...props}/>
            {children}
            {error && <div className="error" style={{color: 'red'}}>{error}</div>}
        </div>
    );
};

TextInput.propTypes = {
    htmlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.string,
    /** child component to display next to the input */
    children: PropTypes.node
}

export default TextInput;