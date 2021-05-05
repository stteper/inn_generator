import BaseGenerator from './generator';

class BikGenerator extends BaseGenerator {
  generate():string {
    const coeffs = ['02','06','09','13','16','21','23','31','39','43','48','51','55','59','62','67','72','74'];
    let midDigits = '';
    do {
      midDigits = this.generateRndStr(2);
    } while (coeffs.indexOf(midDigits)!== -1);

    const lastDigits = Math.floor(Math.random() * 950+ 50);
    return '04' + midDigits + this.generateRndStr(2) + (lastDigits < 100 ? '0'+ String(lastDigits) : String(lastDigits));
  }

}

export default BikGenerator;