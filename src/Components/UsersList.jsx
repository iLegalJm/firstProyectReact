import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const UsersList = ({ endPoint }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
                const data = await response.json();
                setData(data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [endPoint]);

    return (
        <>
            <ul>
                {endPoint == 'users' ? data.map(item => <li key={item.id}>Nombre: {item.name}</li>) : data.map(item => <li key={item.id}>Nombre: {item.body}</li>)}
            </ul>
        </>
    )
}

UsersList.propTypes = {
    endPoint: PropTypes.string.isRequired,
}
