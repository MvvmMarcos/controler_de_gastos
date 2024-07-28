import  {useState, useContext, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Container, Transaction, TransactionDiv } from './styles';
//context
import { Context } from '../../contexts/UserContext';
import { useParams } from 'react-router-dom';
//helper
import {formatDate} from '../../helpers/formatDate';
const TransactionEdit = () => {
  const {id} = useParams();
  const [transaction, setTransaction] = useState({});
  const [update, setUpdate] = useState({});

  const {getTransactionById, updateTransaction}:any = useContext(Context);
    useEffect(()=>{
        (async ()=>{
            const data = await getTransactionById(Number(id))
            setTransaction(data);
        })()
    },[])


    const handleChange = (e:any)=>{
      setTransaction(
        {...transaction,[e.target.name]:e.target.value}
      )
    }
    async function handleSubmit(e:any){
        e.preventDefault();
        updateTransaction(id, transaction)
    }
    // console.log(transaction)
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Editar transação</h1>
        <p>Preencha os campos com os dados para atualização</p>
          <form onSubmit={handleSubmit}>
            <Transaction>
              <label>Transação</label>
              <div>
                <label htmlFor="type">
                    <input type="radio" name="type" 
                    value="expense"onChange={(e)=>handleChange(e)}
                    checked={transaction.type === 'expense'}
                    />
                    <span>Despesa</span>
                </label>
                <label htmlFor="type">
                    <input type="radio" name="type" 
                    value="income" onChange={(e)=>handleChange(e)} 
                    checked={transaction.type === 'income'}
                    />
                    <span>Receita</span>
                </label>
              </div>
            </Transaction>
            <TransactionDiv>
              <label htmlFor="money">Valor</label>
              <input 
              type="number" 
              name='money'
              value={transaction.money}
              onChange={(e)=>handleChange(e)}
               placeholder='Digite o valor' />
            </TransactionDiv>
            

            <TransactionDiv>
                
                <label htmlFor="date">Data da transação {formatDate(transaction.date)}</label>
                <input type="date"
                value={transaction.date}
                name='date' onChange={(e)=>handleChange(e)} />
            </TransactionDiv>

            <TransactionDiv>
              <label htmlFor="transactionType">Tipo da transação</label>
              <select name="transactionType" value={transaction.transactionType} onChange={(e)=>handleChange(e)}>
                <option value="">Selecione um tipo de transação</option>
                <option value="Transporte">Transporte</option>
                <option value="Acomodação">Acomodação</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Supermercado">Supermercado</option>
                <option value="Salário">Salário</option>
                <option value="Pagamento">Pagamento</option>
                <option value="Outros">Outros</option>
              </select>
            </TransactionDiv>
            <TransactionDiv>
              <label htmlFor="description">Descrição</label>
              <input type="text" 
              name='description' 
              value={transaction.description}
              onChange={(e)=>handleChange(e)}
              placeholder='Faça uma breve descrição' />
            </TransactionDiv>
            <button>Atualizar</button>
          </form>
      </Container>
    </div>
  )
}

export default TransactionEdit

