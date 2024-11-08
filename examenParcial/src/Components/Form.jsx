import { useState } from "react";
import Card from "./Card";

const Form = () => {
const [usuario, setUsuario] = useState({
    nombre: "",
    equipo:"",
});

const [mostrar, setMostrar] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.nombre.trim().length > 3 && usuario.equipo.trim().length > 6) {
    setMostrar(true);
    setError(false);
    } else {
    setError(true);
    }
    
};

return (
    <div>
    {mostrar ? (
        <Card nombre={usuario.nombre} equipo={usuario.equipo} />
    ) : (
        <form onSubmit={handleSubmit}>
        <label><b>Nombre:</b></label>
        <input
            type="text"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
/>
<label><b>Club Hincha:</b></label>
<input
            type="text"
            value={usuario.equipo}
            onChange={(e) => setUsuario({ ...usuario, equipo: e.target.value })}
/>

        <button>Enviar Formulario</button>
        {error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta</p>}
        </form>
    )}
    </div>
);
};

export default Form;


