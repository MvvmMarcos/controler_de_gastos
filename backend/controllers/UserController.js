const User = require('../models/User');
//bcrypt
const bcrypt = require('bcrypt');
//jwt
const jwt = require('jsonwebtoken')
//helpers
const createUserToken = require('../helpers/create-user-token');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');

module.exports = class UserController{
    static async register(req, res){
        //pegar os dados do body
        const {name, email, password, confirmpassword} = req.body;
        //validações
        if(!name){
            return res.status(422).json({message:'O nome é obrigatório!'})
        }
        if(!email){
            return res.status(422).json({message:'O e-mail é obrigatório!'})
        }
        if(!password){
           return res.status(422).json({message:'A senha é obrigatória!'})
        }
        if(!confirmpassword){
           return res.status(422).json({message:'A confirmação de senha é obrigatória!'})
        }
        if(password !== confirmpassword){
            return res.status(422).json({message:"A senha e confirmação de senha devem ser iguais!"})
        }

        //check if user exist
        const userExists = await User.findOne({where:{email:email}});
        if(userExists){
            return res.status(422).json({message:'Por favor utilize outro e-mail'})
        }
        ///create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        //create a user
        const user = {
            name,
            email,
            password:passwordHash
        }
        try {
            const newUser = await User.create(user);
            await createUserToken(newUser, req, res, {message:'Cadastro realizado com sucesso, você também já esta autenticado'});
        } catch (error) {
           res.status(500).json({message:error})
        }
    }
    static async login(req, res){
        const {email, password} = req.body;
        if(!email){
            return res.status(422).json({message: 'Preencha o campo e-mail!'})
        }
        if(!password){
            return res.status(422).json({message: 'Preencha o campo senha!'})
        }
        //check if user exist
        const user = await User.findOne({where:{email:email}});
        if(!user){
            return res.status(422).json({message:'Não há usuário cadastrado com este e-mail!'})
        }
        //check if password match
        const checkPassword = await bcrypt.compare(password, user.password);
        if(!checkPassword){
            return res.status(422).json({message:'Senha inválida!'})
        }
        await createUserToken(user, req, res, {message:"Você esta autenticado!"});
    }
    static async checkUser(req, res){
        let currentUser;
        console.log(req.headers.authorization)
        if(req.headers.authorization){
            const token = getToken(req)
            const decoded = jwt.verify(token, 'nosso_secret');
            console.log(decoded);
            currentUser = await User.findByPk(decoded.id);
            currentUser.password = undefined
        }else{
            currentUser = null
        }
        res.status(200).send(currentUser)
    }
    static async getUserById(req, res){
        const id = req.params.id
        const user = await User.findByPk(id);
        if(!user){
            return res.status(422).json({message:'Usuário não encontrado!'})
        }
        user.password = undefined;
        res.status(200).json({user})
    }
    static async editUser(req, res){
        const {id} = req.params;
        //check if user exists
        const token = getToken(req);
        const user = await getUserByToken(token);
        const {name, email, password, confirmpassword} = req.body;
        let image = '';

        if(req.file){
            user.image = req.file.filename
        }


        //validações
        if(!name){
            return res.status(422).json({message:'O nome é obrigatório!'})
        }
        user.name = name;
        if(!email){
            return res.status(422).json({message:'O e-mail é obrigatório!'})
        }
        //check if email has already taken
        const userExists = await User.findOne({where:{email:email}});
        
        if(user.email !== email && userExists){
            return res.status(422).json({message:'Por favor, utilize outro e-mail!'})
        }
        user.email = email;
        if(password !== confirmpassword){
            return res.status(422).json({message:"A senha e confirmação de senha devem ser iguais!"})
        }else if(password === confirmpassword && password != null){
            //creating a password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt)
            user.password = passwordHash;
        }
        try {
            //return user updated data
            await user.save();
            res.status(200).json({message:'Usuário atualizado com sucesso!'});
        } catch (error) {
            return res.status(500).json({message:error})
        }



        // //check if user exists
        // const user = await User.findByPk(id);
        // if(!user){
        //     return res.status(422).json({message:'Usuário não encontrado'})
        // }

        // res.status(200).json({message:'Deu certo'})
    }
}