import { createContext} from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({children}:any){

    const {authenticated, register, logout, login, create, getAllTransaction, getTransactionById, updateTransaction, deleteTransaction} = useAuth();
    return(
        <Context.Provider value={{authenticated, register, logout, login, create, getAllTransaction, getTransactionById, updateTransaction, deleteTransaction}}>
            {children}
        </Context.Provider>
    )
}
export {Context, UserProvider};
