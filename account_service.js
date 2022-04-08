const Account = require('./db_account.js');

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
        if(account._id){
            throw new Error("ID не найден");
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

    async updateFirstName(account){
        if(!account){
            throw new Error("Не указано имя");
        }
        const first_name= await Account.findByIdAndUpdate(account._id, account, {new:true});
        return first_name;
    }
    async updateSecondName(account){
        if(!account){
            throw new Error("Не указана фамилия");
        }
        const second_name= await Account.findByIdAndUpdate(account._id, account, {new:true});
        return second_name;
    }
    async updateThirdName(account){
        if(!account){
            throw new Error("Не указано отчество");
        }
        const third_name= await Account.findByIdAndUpdate(account._id, account, {new:true});
        return third_name;
    }
    
}

module.exports= new AccountService();