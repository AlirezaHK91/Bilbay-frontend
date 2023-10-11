import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) {
        return <Navigate to ="/loginpage"/>
    }

    if(user.roles?.includes("ROLE_PRIVATE")) {
        return <>{children}</>
    }
};

export default PrivateRoute;