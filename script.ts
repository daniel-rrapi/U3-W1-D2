
class SonAccount {
    balanceInit: number = 0
    oneDeposit(versamento: number) {
        this.balanceInit = this.balanceInit + versamento
        console.log(`Saldo: ${this.balanceInit}€`)
    }
    oneWithDraw(prelievo: number) {
        this.balanceInit = this.balanceInit - prelievo
        console.log(`Saldo: ${this.balanceInit}€`)
    }
}

class MotherAccount {
    balanceInit: number = 0
    twoDeposit(versamento: number) {
        this.balanceInit = this.balanceInit + versamento
        console.log(`Saldo: ${this.balanceInit}€`)
    }
    twoWithDraw(prelievo: number) {
        this.balanceInit - prelievo
        console.log(`Saldo: ${this.balanceInit}€`)
    }
    addInterest() {
        console.log(`Interessi: ${this.balanceInit * 10 / 100}€`)
    }
}
let sonAcc = new SonAccount()
let motherAcc = new MotherAccount()

sonAcc.oneDeposit(50)
sonAcc.oneWithDraw(10)


motherAcc.twoDeposit(200)
motherAcc.addInterest()


