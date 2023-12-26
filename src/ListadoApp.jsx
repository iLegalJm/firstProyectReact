import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from './Components/Button';
import { Formulario } from './Components/Formulario';
const Items = ({ nombre, visto }) => {
    return (
        <li className='capitalize font-semibold'>{nombre} {visto ? '✅' : '⛔'}</li>
    )
}

export const ListadoApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { nombre: 'Nuevo tema', visto: false }]);
    }

    let listadoSecciones = [
        { id: 1, nombre: 'Uso de vite', visto: true },
        { id: 2, nombre: 'Componentes', visto: true },
        { id: 3, nombre: 'Variables en JSX', visto: true },
        { id: 4, nombre: 'Props', visto: true },
        { id: 5, nombre: 'Eventos', visto: true },
        { id: 6, nombre: 'useState', visto: true },
        { id: 7, nombre: 'Redux', visto: false },
        { id: 8, nombre: 'customHooks', visto: false },
    ]
    const onAgregarTarea = (value) => {
        if (value.trim() !== '') {
            setArreglo([...arreglo, { id: arreglo.length + 1, nombre: value.trim(), visto: false }]);
        } else {
            alert('No puedes agregar una tarea vacia');
        }
    }
    const [arreglo, setArreglo] = useState(listadoSecciones);
    return (
        <>
            <h1 className="text-lg">Listado de Temas del curso</h1>
            <Formulario agregarTarea={onAgregarTarea}></Formulario>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
            </ol>
            <Button name='Agregar lista' evento={addTask}></Button>
        </>
    )
}
Items.propTypes = {
    // id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    visto: PropTypes.bool.isRequired,
}