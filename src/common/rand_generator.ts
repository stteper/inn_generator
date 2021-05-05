import BaseGenerator, { IGenParam } from './generator';

export interface IRndGenParam extends IGenParam {
  vocab?: string
}

class RandGenerator extends BaseGenerator {
  generate(param?: IRndGenParam):string {
    let len = 10;
    if(typeof param !== 'undefined' && param.len) {
      len = param.len;
    }
    let vocab = '0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';
    if(typeof param !== 'undefined' && typeof param.vocab !== 'undefined') {
      vocab = param.vocab;
    }
    return this.generateRndStr(len,vocab);
  }
}

export default RandGenerator;
