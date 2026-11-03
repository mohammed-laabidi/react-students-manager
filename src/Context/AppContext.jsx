import { createContext,useContext,useReducer } from "react";
import AppReducer from "../Reducers/AppReducer";

export const AppContext = createContext("")

 const listStudents = [
        { id: 1, fullName: "Mohammed Laabidi", email: "mohammed@example.com", status: "active" },
        { id: 2, fullName: "Fatima Zahra", email: "fatima@example.com", status: "active" },
        { id: 3, fullName: "Youssef Alami", email: "youssef@example.com", status: "active" },
        { id: 4, fullName: "Aya Benjelloun", email: "aya@example.com", status: "active" },
        { id: 5, fullName: "Mehdi Tazi", email: "mehdi@example.com", status: "active" }
    ];

export const AppProvider = ({children}) => {

    const [students,dispatch] = useReducer(AppReducer, listStudents)

    return(
    <AppContext.Provider value={[students,dispatch]}>
        {children}
    </AppContext.Provider>
    )
}

export const useAppReducer = () => {
    return useContext(AppContext)
}

