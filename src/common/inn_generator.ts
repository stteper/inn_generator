import BaseGenerator from './generator';

class InnGenerator extends BaseGenerator {
  generate():string {
    const res = this.generateRndStr(9);
    return res + this.getCheckDigits(res, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
  }

  protected getCheckDigits(val: string, weightCoeff: Array<number>):string {
    let sum = 0;
    for(let i = 0; i < val.length; i++) {
      sum += +val[i] * weightCoeff[i];
    }
    return String(sum % 11 % 10);
  }
}

export default InnGenerator;
