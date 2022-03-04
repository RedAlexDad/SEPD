const AccountService = require('./account_service.js');
const Account = require('./db_account.js');

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
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res){
        try {
            const updateAccount = await AccountService.update(req.body);
            res.json(updateAccount);            
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    //Обновлене имени, фамилии, отчества
    async updateFirstName(req, res){
        try {
            const updateFirstNameAccount = await AccountService.updateFirstName(req.body);
            res.json(updateFirstNameAccount);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async updateSecondName(req, res){
        try {
            const updateSecondNameAccount = await AccountService.updateSecondName(req.body);
            res.json(updateSecondNameAccount);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async updateThirdName(req, res){
        try {
            const updateThirdNameAccount = await AccountService.updateThirdName(req.body);
            res.json(updateThirdNameAccount);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    //--------------------

    async delete(req, res){
        try {
            const account = await AccountService.delete(req.params.id);
            res.json(account);            
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new AccountController();