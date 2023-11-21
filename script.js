var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
    }
    SonAccount.prototype.oneDeposit = function (versamento) {
        this.balanceInit = this.balanceInit + versamento;
        console.log("Saldo: ".concat(this.balanceInit, "\u20AC"));
    };
    SonAccount.prototype.oneWithDraw = function (prelievo) {
        this.balanceInit = this.balanceInit - prelievo;
        console.log("Saldo: ".concat(this.balanceInit, "\u20AC"));
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
        this.balanceInit = 0;
    }
    MotherAccount.prototype.twoDeposit = function (versamento) {
        this.balanceInit = this.balanceInit + versamento;
        console.log("Saldo: ".concat(this.balanceInit, "\u20AC"));
    };
    MotherAccount.prototype.twoWithDraw = function (prelievo) {
        this.balanceInit - prelievo;
        console.log("Saldo: ".concat(this.balanceInit, "\u20AC"));
    };
    MotherAccount.prototype.addInterest = function () {
        console.log("Interessi: ".concat(this.balanceInit * 10 / 100, "\u20AC"));
    };
    return MotherAccount;
}());
var sonAcc = new SonAccount();
var motherAcc = new MotherAccount();
sonAcc.oneDeposit(50);
sonAcc.oneWithDraw(10);
motherAcc.twoDeposit(200);
motherAcc.addInterest();
