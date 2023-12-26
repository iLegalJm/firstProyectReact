import { useState } from "react";
import { UsersList } from "./Components/UsersList";
export const UsersApp = () => {

    const [endPoint, setEndPoint] = useState('users');

    const handleFetch = () => {
        setEndPoint('comments');
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold uppercase">UseEffect y Fetch</h1>
            <div>
                <h2 className="text-lg">Usuarios</h2>
                <ul>

                </ul>
                <UsersList endPoint={endPoint}></UsersList>
                <button className='bg-orange-500 px-4 py-2' onClick={handleFetch}>Llamar Api</button>
            </div>
        </>
    )
}
