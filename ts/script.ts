//ESERCIZION BANK
class MotherAccount{

    private balance:number=0;

    versamento(oneDeposit:number){
        this.balance+=oneDeposit;
        this.addInterest();
    }
    prelievo(oneDeposit:number){
        if(this.balance>oneDeposit){
        this.balance-=oneDeposit;
        }else{
            console.log("non puoi prelevare");
        }
      
    }
    printBalance(){
        console.log(this.balance);
    }

    private addInterest(){
        this.balance+=this.balance*0,1;
    }
}



class SonAccount extends MotherAccount{
    protected balance:number=0;

    versamento(oneDeposit:number){
        this.balance+=oneDeposit;
        
    }
    prelievo(oneDeposit:number){
        if(this.balance>oneDeposit){
        this.balance-=oneDeposit;
        }else{
            console.log("non puoi prelevare");
        }
      
    }
    printBalance(){
        console.log(this.balance);
    }
}




let motherAccount= new MotherAccount();
motherAccount.versamento(100);
motherAccount.prelievo(50);
motherAccount.printBalance();

let sonAccount= new SonAccount();
sonAccount.versamento(500);
sonAccount.prelievo(100);
sonAccount.printBalance();
sonAccount.prelievo(600);
sonAccount.printBalance();