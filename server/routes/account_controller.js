const AccountService = require('./account_service.js');
const Account = require('../models/db_account.js');

class AccountController{
    // async create(req, res){
    //     try {
    //         const account = await AccountService.create(req.body);
    //         res.json(account);            
    //     } catch (e) {
    //         res.status(500).json(e);
    //     }
    // }
    // async getAll(req, res){
    //     try {
    //         const accounts = await AccountService.getAll();
    //         res.json(accounts);            
    //     } catch (e) {
    //         res.status(500).json(e);
    //     }
    // }

    async getOne(req, res){
        try {
            const account = await AccountService.getOne(req.body);
            res.json(account);  
            console.log(account);          
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res){
        try {
            const updateAccount = await AccountService.update(req.body);
            res.json(updateAccount);     
            console.log(updateAccount);      
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    //Обновлене имени, фамилии, отчества
    async updateFirstName(req, res){
        try {
            const updateFirstNameAccount = await AccountService.updateFirstName(req.body);
            res.json(updateFirstNameAccount);
            console.log(updateFirstNameAccount);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async updateSecondName(req, res){
        try {
            const updateSecondNameAccount = await AccountService.updateSecondName(req.body);
            res.json(updateSecondNameAccount);
            console.log(updateSecondNameAccount);   
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async updateThirdName(req, res){
        try {
            const updateThirdNameAccount = await AccountService.updateThirdName(req.body);
            res.json(updateThirdNameAccount);
            console.log(updateThirdNameAccount);   
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    //--------------------

    async delete(req, res){
        try {
            const account = await AccountService.delete(req.params.id);
            res.json(account);
            console.log(account);              
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new AccountController();