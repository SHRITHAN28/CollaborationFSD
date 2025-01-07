/*Create a class BankAccount with properties accountHolder and balance. Add 
methods deposit(amount) and withdraw(amount) to handle the balance. Write a 
function transfer(account, amount) that transfers money between two accounts.  */
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) this.balance -= amount;
        else console.log("Insufficient balance");
    }
}

function transfer(account, amount) {
    this.withdraw(amount);
    account.deposit(amount);
}
