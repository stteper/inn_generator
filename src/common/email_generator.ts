import BaseGenerator, {IGenParam} from './generator';
import {digits, lat, rus} from "./symbols";

class EmailGenerator extends BaseGenerator {
  generate(param?: IGenParam):string {
    const part2Symb = digits + lat + lat.toUpperCase() + rus + rus.toUpperCase();
    const part1Symb = part2Symb + '!#&\'*+/^_`';
    const len = Math.max(param && param.len ? param.len : 30, 6);
    const secPartLen = Math.min(Math.random() * (len - 5) + 1, 62);

    return [
      this.generateRndStr(len - secPartLen - 4, part1Symb),
      '@',
      this.generateRndStr(secPartLen, part2Symb),
      '.',
      this.generateRndStr(2, part2Symb)
    ].join('');
  }
}

export default EmailGenerator;
