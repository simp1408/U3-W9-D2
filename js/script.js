"use strict";
class MotherAccount {
    constructor() {
        this.balance = 0;
    }
    versamento(oneDeposit) {
        this.balance += oneDeposit;
        this.addInterest();
    }
    prelievo(oneDeposit) {
        if (this.balance > oneDeposit) {
            this.balance -= oneDeposit;
        }
        else {
            console.log("non puoi prelevare");
        }
    }
    printBalance() {
        console.log(this.balance);
    }
    addInterest() {
        this.balance += this.balance * 0, 1;
    }
}
class SonAccount extends MotherAccount {
    constructor() {
        super(...arguments);
        this.balance = 0;
    }
    versamento(oneDeposit) {
        this.balance += oneDeposit;
    }
    prelievo(oneDeposit) {
        if (this.balance > oneDeposit) {
            this.balance -= oneDeposit;
        }
        else {
            console.log("non puoi prelevare");
        }
    }
    printBalance() {
        console.log(this.balance);
    }
}
let motherAccount = new MotherAccount();
motherAccount.versamento(100);
motherAccount.prelievo(50);
motherAccount.printBalance();
let sonAccount = new SonAccount();
sonAccount.versamento(500);
sonAccount.prelievo(100);
sonAccount.printBalance();
sonAccount.prelievo(600);
sonAccount.printBalance();
