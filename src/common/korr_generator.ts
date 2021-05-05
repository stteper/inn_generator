import BaseGenerator, { IGenParam } from './generator';
export interface IKsGenParam extends IGenParam {
  bik: string
}

class KorrGenerator extends BaseGenerator {
  protected coeffs:Array<number> = [7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7,1];
  protected currencies:Array<string> = [
    '643', //RUB
    '840', //USD
    '978'  //EUR,
  ];
  generate(param: IKsGenParam):string {
    const rndCurrency = this.currencies[Math.floor(Math.random() * this.currencies.length)];
    const firstPart =  this.generateRndStr(5);
    const lastPart = this.generateRndStr(11);
    const bikPart = '0' + param.bik.substr(4, 2);
    let key = 0;
    let sum = this.checkSum(bikPart + firstPart + rndCurrency + String(key) + lastPart);
    key = ((sum % 10) *3) %10;
    return firstPart + rndCurrency + String(key) + lastPart;
  }

  protected checkSum(val:string):number {
    let sum = 0;
    for(let i=0; i<val.length; i++) {
      sum += this.coeffs[i] * (+val[i]);
    }
    return sum;
  }

}

export default KorrGenerator;