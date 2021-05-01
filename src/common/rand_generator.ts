import BaseGenerator from './generator';

class RandGenerator extends BaseGenerator {
  generate():string {
    const vocab = '0123456789abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';
    return this.generateRndStr(10,vocab);
  }
}

export default RandGenerator;
