import { useState } from "react";
import PropTypes from 'prop-types';
export const Formulario = ({ agregarTarea }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = () => {
        agregarTarea(inputValue);
    }
    return (
        <form onSubmit={onSubmit}>
            <input className="text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Ingresa tarea nueva"
                value={inputValue} onChange={onInputChange} />
        </form>
    )
}

Formulario.propTypes = {
    agregarTarea: PropTypes.func.isRequired,
}
