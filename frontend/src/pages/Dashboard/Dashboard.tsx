import { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Container, CardContainer, NoTransaction} from './styles';
import { Context } from '../../contexts/UserContext';
import CardTransaction from '../../components/CardTransaction/CardTransaction';

const Dashboard = () => {
  const {getAllTransaction, deleteTransaction}:any = useContext(Context);
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    (async()=>{
       setTransactions(await getAllTransaction());
      })()
    },[])
    function handleDelete(id:number){
      setTransactions(transactions.filter((transaction)=>transaction.id !== id))
      deleteTransaction(id)

    }
  return (
    <Container>
      <Navbar />
      <h1>Lista das transações</h1>
      <CardContainer>
      {transactions.length > 0 && transactions.map((transaction)=>(
       <CardTransaction key={transaction.id} transaction={transaction} onDelete={handleDelete}/>
      ))}
      </CardContainer>
      {transactions.length == 0 && (
        <NoTransaction>Não há transações cadastras!</NoTransaction>
      )}
      </Container>
      
    )
}

export default Dashboard