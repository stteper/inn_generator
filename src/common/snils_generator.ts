import BaseGenerator from './generator';

class SnilsGenerator extends BaseGenerator {

  generate():string {
    const res = this.generateRndStr(9);
    return this.showFormat(res + this.showTwoDig(this.getCheckDigits(res)));
  }

  protected getCheckDigits(val:string):number {
    let sum = 0;
    for(let i = 0; i < val.length; i++) {
      sum += +val[i] * (9-i);
    }
    return (sum < 100) ? sum : ((sum <=101) ? 0 : sum % 101);
  }

  private showTwoDig = (val: number): string => `0${val}`.slice(-2);

  private showFormat(val:string):string {
    let arrVal = val.split('');
    arrVal.splice(3,0,'-');
    arrVal.splice(7,0,'-');
    arrVal.splice(11,0,' ');
    return arrVal.join('');
  }
}

export default SnilsGenerator;