import { createContext, useEffect, useReducer } from "react"
import { login_failure, login_success, start_login, logout } from "../constants/actionTypes.js";


const INIT_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null
}

//set up the initial state for context
export const LoginContext = createContext(INIT_STATE);

//when a user try to login, the action and the state changes
const LoginReducer = (state, action) => {
    switch (action.type) {
        case start_login:
            return {
                user: null,
                loading: true,
                error: null
            }
        case login_success:
            return {
                user: action.payload,
                loading: false,
                error: null
            }
        case login_failure:
            return {
                user: null,
                loading: false,
                error: action.payload
            }
        case logout:
            return {
                user: null,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}

//children === app.js
export const LoginContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(LoginReducer, INIT_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <LoginContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </LoginContext.Provider>
    )
}