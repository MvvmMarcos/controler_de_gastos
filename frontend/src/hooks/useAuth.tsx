//api
import api from "../utils/api";
import { useEffect, useState } from "react";
//toast
import { toast } from 'react-toastify';

interface RegisterProps {
    user: object;
}
interface TransactionProps {
    transaction: object;
}

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('tokenTransactions')
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true);
        } else {
            setAuthenticated(false)
        }
    }, [])
    //função de registrar
    async function register(user: RegisterProps) {

        try {
            const data = await api.post('/users/register', user)
                .then((response) => {
                    toast.success(response.data.message);
                    return response.data
                })
            authUser(data)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    //login
    async function login(user: RegisterProps) {
        try {
            const data = await api.post('/users/login', user)
                .then((response) => {
                    toast.success(response.data.message)
                    return response.data;
                })
            authUser(data);
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    //sair
    function logout() {
        toast.success('Logout realizado com sucesso!');
        localStorage.removeItem('tokenTransactions');
        setAuthenticated(false);
        api.defaults.headers.Authorization = null;
        window.location.href = "/";

    }
    async function authUser(data: any) {
        setAuthenticated(true);
        localStorage.setItem('tokenTransactions', JSON.stringify(data.token));
        window.location.href = '/home'
    }
    //criar transação
    async function create(transaction: TransactionProps) {
        try {
            const data = await api.post('/transactions/create', transaction)
                .then((response) => {
                    toast.success(response.data.message);
                    return response.data;
                })
            window.location.href = "/home";
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    //listar transaçães
    async function getAllTransaction() {
        let data = [];
        try {
            data = await api.get('/transactions')
                .then((response) => {
                    return response.data.transactions
                })
            return data;
        } catch (error) {
            console.log(error)
        }
    }
    //pegar transações por id
    async function getTransactionById(id: number) {
        console.log(id);
        let data = [];
        try {
            const data = await api.get(`/transactions/${id}`)
                .then((response) => {
                    return response.data.transaction
                })
                return data;
        } catch (error) {
                console.log(error)
        }

    }
    //atualizar transação
    async function updateTransaction(id:number, transaction: TransactionProps) {
        try {
            await api.patch(`/transactions/${id}`, transaction)
            .then((response)=>{
                toast.success(response.data.message);
                return response.data;
            })
            window.location.href = "/home";
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    //deletar transação
    async function deleteTransaction(id:number) {
        try {
            await api.delete(`/transactions/${id}`)
            .then((response)=>{
                toast.success(response.data.message);
                return response.data
            })
            // window.location.href = "/home";
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return { authenticated, register, logout, login, create, getAllTransaction, getTransactionById, updateTransaction, deleteTransaction }
}