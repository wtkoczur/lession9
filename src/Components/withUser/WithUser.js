import { UserContext } from "../../Context/user";

const user= {
    email: "jan@kowalski.pl",
    isAdmin: true,
}

const WithUser = (WrappedComponent) => {
    return ({...props}) => {
        return (
            <UserContext.Provider value={user}>
                <WrappedComponent {...props}/>
            </UserContext.Provider>
        )
    }
};

export default WithUser;