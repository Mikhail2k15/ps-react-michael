import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component})=>{
    const {name, description, props, examples } = component;

    return (
        <div className="componentPage">
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Пример{examples.length>1 && "ы"}</h3>
            {
                examples.length>0 ? 
                    examples.map( ex=> <Example key={ex.code} example={ex} componentName={name}/>):
                    "Приверов пока нет :)"
            }
            <h3>Props</h3>
            {
                props?
                <Props props={props}/>: "Этот компонент не принимает props"
            }
        </div>
    );
}

ComponentPage.propTypes ={
    component: PropTypes.object.isRequired
};

export default ComponentPage;