import { useContext } from "react";
import { UserContext } from "../../Context/user";
import WithUser from "../withUser/WithUser";

const Home = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <p>Logged in as admin: {user.isAdmin ? "Yes" : "No"}</p>
        </div>
        // <UserContext.Consumer>
        //     {user => (
        //     <p>Logged in as admin: {user.isAdmin ? "Yes" : "No"}</p>
        //     )}
        // </UserContext.Consumer>
    )
};

export default WithUser(Home);