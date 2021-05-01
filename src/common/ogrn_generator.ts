import BaseGenerator from './generator';

class OgrnGenerator extends BaseGenerator {
  protected firstDigit: string;
  protected rndLen: number;
  constructor() {
    super();
    this.firstDigit = '15';
    this.rndLen = 11;
  }

  generate():string {
    const res = this.generateRndStr(1, this.firstDigit) + this.generateRndStr(this.rndLen);
    return res + this.getCheckDigits(+res);
  }

  protected getCheckDigits(val:number):string {
    return String(val % 11 % 10);
  }
}

export default OgrnGenerator;