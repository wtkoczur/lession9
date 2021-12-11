import { useContext } from "react";
import WithUser from "../withUser/WithUser";
import { UserContext } from "../../Context/user";



const Movies = () => {
    const user = useContext(UserContext)
    return (
        <div>
            {user.email}
        </div>
        // <UserContext.Consumer>
        //     {user => (
        //     <p>{user.email}</p>
        //     )}
        // </UserContext.Consumer>
    )
};

export default WithUser(Movies);