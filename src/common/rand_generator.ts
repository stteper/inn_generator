import BaseGenerator, { IGenParam } from './generator';

export interface IRndGenParam extends IGenParam {
  vocab?: string
}

class RandGenerator extends BaseGenerator {
  generate(param?: IRndGenParam):string {
    let len = 10;
    if(param && param.len) {
      len = param.len;
    }
    let vocab = '0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';
    if(param && param.vocab) {
      vocab = param.vocab;
    }
    return this.generateRndStr(len,vocab);
  }
}

export default RandGenerator;
