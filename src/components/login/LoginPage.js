import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        // Para saber el comportamiento descomente de click en el boton y luego
        // en el boton del browser back para notar la diferencia
        // history.push('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Cristhian'
            },
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr />
            <button className="btn btn-primary" onClick={handleLogin} >Login</button>
        </div>
    )
}
