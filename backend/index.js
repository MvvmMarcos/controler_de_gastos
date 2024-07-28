const express = require('express');
const cors = require('cors');
const app = express();

//banco de dados
const conn = require('./db/conn');
//models
const User = require('./models/User');
const Transactions = require('./models/Transactions')

app.use(cors())
//json respnse
app.use(express.json());
//public for image
app.use(express.static('public'))

//routes
const TransactionRoutes = require('./routes/TransactionsRoutes');
const UserRoutes = require('./routes/UserRoutes');

app.use('/transactions', TransactionRoutes);
app.use('/users', UserRoutes);
conn.sync()
.then(()=>{
    app.listen(5000)
})
.catch((err)=>console.log(err))