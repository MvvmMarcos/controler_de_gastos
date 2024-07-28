import  {useState, useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Container, Transaction, TransactionDiv } from './styles';
//context
import { Context } from '../../contexts/UserContext';
const TransactionRegister = () => {
  const [transaction, setTransaction] = useState({});
  const {create}:any = useContext(Context);
  const [token] = useState(localStorage.getItem('tokenTransactions') || '');
  console.log(token)

    const handleChange = (e:any)=>{
      setTransaction(
        {...transaction,[e.target.name]:e.target.value}
      )
    }
    async function handleSubmit(e:any){
        e.preventDefault();
        create(transaction)
    }
console.log(transaction)
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Cadastrar nova transação</h1>
        <p>Preencha os campos com os dados da transação</p>
          <form onSubmit={handleSubmit}>
            <Transaction>
              <label>Transação</label>
              <div>
                <label htmlFor="type">
                    <input type="radio" name="type" value="expense"   onChange={(e)=>handleChange(e)} />
                    <span>Despesa</span>
                </label>
                <label htmlFor="type">
                    <input type="radio" name="type" value="income" onChange={(e)=>handleChange(e)} />
                    <span>Receita</span>
                </label>
              </div>
            </Transaction>
            <TransactionDiv><label htmlFor="date">Data da transação</label>
              <input type="date"
               name='date' onChange={(e)=>handleChange(e)} />
            </TransactionDiv>
            <TransactionDiv>
              <label htmlFor="money">Valor</label>
              <input 
              type="number" 
              name='money'
              onChange={(e)=>handleChange(e)}
               placeholder='Digite o valor' />
            </TransactionDiv>
            <TransactionDiv>
              <label htmlFor="transactionType">Tipo da transação</label>
              <select name="transactionType" onChange={(e)=>handleChange(e)}>
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
              onChange={(e)=>handleChange(e)}
              placeholder='Faça uma breve descrição' />
            </TransactionDiv>
            <button>Cadastrar</button>
          </form>
      </Container>
    </div>
  )
}

export default TransactionRegister

