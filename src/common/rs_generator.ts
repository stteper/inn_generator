import KorrGenerator, { IKsGenParam } from './korr_generator';

class RsGenerator extends KorrGenerator {
  generate(param: IKsGenParam):string {
    const rndCurrency = this.currencies[Math.floor(Math.random() * this.currencies.length)];
    const firstPart =  this.generateRndStr(5);
    const lastPart = this.generateRndStr(11);
    const bikPart = param.bik.slice(-3);
    let key = 0;
    let sum = this.checkSum(bikPart + firstPart + rndCurrency + String(key) + lastPart);
    key = ((sum % 10) *3) % 10;
    return firstPart + rndCurrency + String(key) + lastPart;
  }
}

export default RsGenerator;