import { useContext } from "react";
import { Context } from "../contexts/UserContext";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";

function Routes(){
    const {authenticated}:any = useContext(Context);
    console.log(authenticated)
return(
    authenticated ? <AuthRoutes/> : <AppRoutes/> 
)
}
export default Routes;