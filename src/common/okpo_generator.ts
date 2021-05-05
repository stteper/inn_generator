import BaseGenerator from './generator';

class OkpoGenerator extends BaseGenerator {
  generate():string {
    const res = this.generateRndStr(7);
    const firstCheckDig = this.getCheckDigit(res, [1, 2, 3, 4, 5, 6, 7]);
    if(firstCheckDig <=9) {
      return res+ String(firstCheckDig);
    } else {
      const secCheckDig = this.getCheckDigit(res, [3, 4, 5, 6, 7, 8, 9]);
      return res+ String(secCheckDig % 10);
    }
  }

  protected getCheckDigit(val: string, weightCoeff: Array<number>):number {
    let sum = 0;
    for(let i = 0; i < val.length; i++) {
      sum += +val[i] * weightCoeff[i];
    }
    return sum % 11;
  }
}

export default OkpoGenerator;
