import React, {Fragment} from 'react';

const Saludar = (props) => {
    return ( 
        <Fragment>
            <h2>Hola: {props.nombre} {props.apellido} que tienes: {props.edad} años.</h2>
        </Fragment>
     );
}
 
export default Saludar;
