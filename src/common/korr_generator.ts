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
    const bikPart = param.bik.slice(-3);
    let key = 0;
    let sum = this.checkSum(bikPart + firstPart + rndCurrency + String(key) + lastPart);
    key = ((sum % 10) *3) %10;

    const val = firstPart + rndCurrency + String(key) + lastPart;

    console.log(param.bik, val, this.checkSumCor(val));

    return val;
  }

  protected checkSum(val:string):number {
    let sum = 0;
    for(let i=0; i<val.length; i++) {
      sum += this.coeffs[i] * (+val[i]);
    }
    return sum;
  }

  protected checkSumCor(val:string):boolean {
    let sum = 0;
    for(let i=0; i<val.length; i++) {
      sum += this.coeffs[i] * (+val[i] % 10);
    }
    return sum % 10 !== 0;
  }

}

export default KorrGenerator;