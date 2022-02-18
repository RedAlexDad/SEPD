const Account = require('./db_account.js');
const AccountData = require('./db_account_data.js');

class AccountService{
    async create(account){
        const createAccount = await Account.create(account);
        return createAccount;
    }
    
    async getAll(){
        const account = await Account.find();
        return account;
    }

    async getOne(account_id){ //_id change  +
        if(!account_id._id){ //_id change  +
            throw new Error("Не указан ID");
        }
        const account = await Account.findById(account_id._id); //_id change  +
        return account;
    }
    async update(account){
        if(!account._id){
            throw new Error("Не указан ID");
        }
        const updateAccount = await Account.findByIdAndUpdate(account._id, account, {new:true});
        return updateAccount;
    }

    async delete(id){
        if(!id){
            throw new Error("Не указан ID");
        }
        const account = await Account.findByIdAndDelete(id);
        return account;
    }

    async getFirst_name(title){
        if(!title){
            throw new Error("Не указано имя");
        }
        const first_name= await AccountData.findByIdAndUpdate()
    }
}

module.exports= new AccountService();