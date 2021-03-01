import React, {Fragment} from 'react';

const Comentario = ({objeto}) => {
    return ( 
        <Fragment>
            <h1>Mis comentarios</h1>
            <div class="media">
                <img src={objeto.urlImagen} class="mr-3" alt="..."/>
            <div class="media-body">
                <h5 class="mt-0">{objeto.nombre}</h5>
                <p>{objeto.texto}</p>
            </div>
            </div>
        </Fragment>
     );
}
export default Comentario;