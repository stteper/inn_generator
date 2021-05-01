import OgrnGenerator from "./ogrn_generator";

class OgrnipGenerator extends OgrnGenerator {
  constructor() {
    super();
    this.firstDigit = '3';
    this.rndLen = 13;
  }

  protected getCheckDigits(val:number):string {
    return String(val % 13 % 10);
  }
}

export default OgrnipGenerator;