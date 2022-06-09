import React from 'react';
import '../css/testimonio.css';

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">  
      <img
       className="imagen-testimonio"
       src={require(`../imagenes/${props.imagen}`)} alt={props.alt}
      />
      <div className="contenedor-texto-testimoio">
        <p className="nombre-testimonio"><span className="bold">{props.nombre}</span> en {props.pais}</p>
        <p className="cargo-testimonio">I{props.cargo} <span className="bold">{props.empresa}</span></p>
        <p className="texto-testimonio">"{props.testimonio}" </p>
      </div>
    </div>
  );
}

export default Testimonio;

