import {Card} from './styles';
import { Link } from 'react-router-dom';
//helpers
import { formatDate } from '../../helpers/formatDate';

const CardTransaction = ({transaction, onDelete}:any) => {
  return (
    <Card typeColor={transaction.type === 'expense' ? true: false }>
      <h3>{transaction.description}</h3>
      <div>
      <ul>
        <li>{transaction.type}</li>
        <li>{transaction.money}</li>
        <li>{transaction.transactionType}</li>
        <li>{formatDate(transaction.date)}</li>
        <li>
          <Link to={`/transaction-edit/${transaction.id}`}>Editar</Link>
          <button onClick={()=>onDelete(transaction.id)}>Excluir</button>
        </li>
      </ul>
      </div>
    </Card>
  )
}

export default CardTransaction