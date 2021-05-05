export interface IGenParam {
  len?: number
};

abstract class BaseGenerator {

  abstract generate(param?: IGenParam): string

  protected generateRndStr(len: number, vocab?: string|undefined):string {
    if(typeof(vocab) === 'undefined') {
      vocab = '0123456789';
    }
    let res = '';
    const vLen = vocab.length;
    for(let i = 0; i< len; i++) {
      const pos = Math.floor(Math.random() * vLen);
      res += vocab[pos];
    }
    return res;
  }


}

export default BaseGenerator;