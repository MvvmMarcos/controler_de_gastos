import {Navigate, Route, Routes} from 'react-router-dom';
//pages
import Dashboard from '../pages/Dashboard/Dashboard';
import TransactionRegister from '../pages/TransactionRegister/TransactionRegister'
import NotFound from '../pages/NotFound/NotFound';
import TransactionEdit from '../pages/TransactionEdit/TransactionEdit';

export function AuthRoutes(){
    return(
        <>
        <Routes>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/transaction-register' element={<TransactionRegister/>}/>
            <Route path='/transaction-edit/:id' element={<TransactionEdit/>}/>
            <Route path='404' element={<NotFound/>}/>
            <Route path='*' element={<Navigate to="/404"/>}/>
        </Routes>
        </>
    )
}