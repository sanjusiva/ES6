class Account{
	constructor(balance){
		this._balance=balance;
	}
	deposit(amount){
		this._balance+=amount;
	}
	set balance(balance){
		if(balance<0){
			console.log('Balance cannot be negative');
		}
		else{
			this._balance=balance;
		}
	}
	get balance(){
		return this._balance;
	}
}
class PremiumAccount extends Account{
	constructor(balance,bonus){
		super(balance)
			this._bonus=bonus;
	}
}
let account=new Account(700);
console.log(account.balance);//700
account.deposit(300);
console.log(account.balance);//1000
account.balance=-100;//Balance cannot be negative
console.log(account.balance);//1000
let premiumAccount=new PremiumAccount(900,100);
console.log(`Premium Account balance before depositing any amount : ${premiumAccount.balance} ,Premium Account bonus : ${premiumAccount._bonus}`);
//Premium Account balance before depositing any amount : 900 ,Premium Account bonus : 100
premiumAccount.deposit(500);
console.log(`Premium Account balance after depositing amount: ${premiumAccount.balance} ,Premium Account bonus : ${premiumAccount._bonus}`);
//Premium Account balance after depositing amount: 1400 ,Premium Account bonus : 100
//1400 ->900+500(balance=900,deposit=500)