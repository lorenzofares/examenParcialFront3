import React from "react";

const Card = ({ nombre, equipo }) => {
return (
    <div>
    <h1 style={{color:"green"}}>Registro exitoso, bienvenido!</h1>
    <h3>Gracias {nombre}</h3>
    <h2>Te hiciste socio del club {equipo}</h2>
    </div>
);
};

export default Card;
