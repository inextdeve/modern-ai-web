// ProtectedRoute.js
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { userToken } = useSelector((state) => state.auth)

    // show unauthorized screen if no user is found in redux store
    if (!userToken) {
        return <Navigate to="/auth/login" />
    }

    // returns child route elements
    return <>{children}</>
}
export default ProtectedRoute;