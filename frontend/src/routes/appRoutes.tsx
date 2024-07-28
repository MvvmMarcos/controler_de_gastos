import {Navigate,Route, Routes} from 'react-router-dom';
//pages
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import NotFound from '../pages/NotFound/NotFound';
export function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </>
    )
}