const Transactions = require('../models/Transactions');
//helpers
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');
module.exports = class TransactionsController{
    //create a transaction
    static async create(req, res){
        // const {date, description, money, transactionType, type} = req.body;
        const date = req.body.date;
        const description = req.body.description;
        const money = req.body.money;
        const transactionType = req.body.transactionType;
        const type = req.body.type;
        //se tivesse image
        //validations
        if(!type){
            return res.status(422).json({message:"Prencha o campo transação!"})
        }
        if(!date){
            return res.status(422).json({message:"Prencha o campo data!"})
        }
        if(!money){
            return res.status(422).json({message:"Prencha o campo valor!"})
        }
        if(!transactionType){
            return res.status(422).json({message:"Prencha o campo tipo de transação!"})
        }
        if(!description){
            return res.status(422).json({message:"Prencha o campo descrição!"})
        }
        // const get transaction user 
        const token = getToken(req)
        const user = await getUserByToken(token)
        const transacion = {
            date, description, money, transactionType, type, UserId:user.id
        }
        try {
            const newTransaction = await Transactions.create(transacion);
            return res.status(201).json({message:'Transação cadastrada com sucesso!', newTransaction})
        } catch (error) {
            return res.status(500).json({message:error});
        }        
    }
    static async getAllTransactions(req, res){
        // get user by token
        const token = getToken(req)
        const user = await getUserByToken(token);
        const transactions = await Transactions.findAll({where:{UserId:user.id}})
        return res.status(200).json({transactions})
    }
    static async getTransactionById(req, res){
        const {id} = req.params;
        const transaction = await Transactions.findByPk(id);
        //get user by token
        const token = getToken(req);
        const user = await getUserByToken(token);
        if(!transaction){
            return res.status(404).json({message:'Transação não encontrada'});
        }
        if(user.id !== transaction.UserId){
            return res.status(500).json({message:'Apenas o dono da transação pode acessar!'})
        }
        res.status(200).json({transaction});
    }
    static async removeTransactionById(req, res){
        const {id} = req.params;
        const transaction = await Transactions.findByPk(id);
        //get user by token
        const token = getToken(req);
        const user = await getUserByToken(token);
        if(!transaction){
            return res.status(404).json({message:'Transação não encontrada'});
        }
        if(user.id !== transaction.UserId){
            return res.status(500).json({message:'Apenas o dono da transação pode deletar a transação!'})
        }
        // console.log(transaction);
        await Transactions.destroy({where:{id:transaction.id}});
        res.status(200).json({message:'Transação removida com sucesso!'})
    }
    static async updateTransaction(req, res){
        const {id} = req.params;
        const {date, description, money, transactionType, type} = req.body;
        const updatedData = {}
        //check if transaction exists
        const transaction = await Transactions.findByPk(id);
        if(!transaction){
            return res.status(404).json({message:'Transação não encontrada'});
        }
        //get user by token
        const token = getToken(req);
        const user = await getUserByToken(token);
        if(user.id !== transaction.UserId){
            return res.status(500).json({message:'Apenas o dono da transação pode deletar a transação!'})
        }
        //validations
        if(!date){
            return res.status(422).json({message:"Preencha o campo data!"})
        }
        updatedData.date = date;
        if(!description){
            return res.status(422).json({message:"Preencha o campo descrição!"})
        }
        updatedData.description = description;
        if(!money){
            return res.status(422).json({message:"Preencha o campo valor!"})
        }
        updatedData.money = money;
        if(!transactionType){
            return res.status(422).json({message:"Preencha o campo tipo de transação!"})
        }
        updatedData.transactionType = transactionType;
        if(!type){
            return res.status(422).json({message:"Preencha o campo transação!"})
        }         
        updatedData.type = type;

        await Transactions.update({
            date:updatedData.date,
            description:updatedData.description,
            money:updatedData.money,
            transactionType:updatedData.transactionType,
            type:updatedData.type
        },{
            where:{
                id:id
            }
        })
        res.status(200).json({message:"Transação atualizada com sucesso!"})
    }
}
// Começar o frontend