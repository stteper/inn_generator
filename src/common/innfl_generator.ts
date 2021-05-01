import InnGenerator from "./inn_generator";


class InnflGenerator extends InnGenerator {
  generate():string {
    let res = this.generateRndStr(10);
    res += this.getCheckDigits(res, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
    return res + this.getCheckDigits(res, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
  }
}

export default InnflGenerator;
