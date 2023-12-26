// rafc
import PropTypes from "prop-types";
import { useState } from "react";
export const Contador = ({ value }) => {
	const handleClick = () => {
		setContador(contador + 1);
	}

	const [contador, setContador] = useState(value);

	return (
		<>
			<h2>Contador</h2>
			<p className="text-white">{contador}</p>
			<button className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
				onClick={handleClick}>Soy un boton</button>
		</>
	);
};

Contador.propTypes = {
	value: PropTypes.number.isRequired,
};
