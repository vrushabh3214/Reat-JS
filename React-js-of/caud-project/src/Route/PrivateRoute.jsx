import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../Contextapi/AuthContext';

export default function PrivateRoutes({ children }) {

    const { token } = useContext(authContext)


    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            {children}
        </div>
    )
}
