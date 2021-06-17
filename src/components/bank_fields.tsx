import React, { useState, useCallback } from "react";
import {Card} from "./card";
import {Colors} from "../common/color";
import {Field} from "./field";

import BikGenerator from "../common/bik_generator";
import OkpoGenerator from "../common/okpo_generator";
import RandGenerator, {IRndGenParam} from "../common/rand_generator";
import KorrGenerator, {IKsGenParam} from "../common/korr_generator";
import RsGenerator from "../common/rs_generator";

const bikGen = new BikGenerator();
const rndGen = new RandGenerator();
const okpoGen = new OkpoGenerator();
const korGen = new KorrGenerator();
const rsGen = new RsGenerator();

const KppGenParam: IRndGenParam = {
  len: 9,
  vocab: '0123456789'
};

const BankFields : React.FC = () => {
  const [bikVal, setBikVal] = useState<IKsGenParam>({ bik: '' });

  function updateBik(val: string):void {
    setBikVal({ bik: val } );
  }

  return (
    <div className="mb-5 text-center">
      <Card title="Банковские данные" color={Colors.secondary}>
        <Field name="bank_bik" title="БИК" generator={bikGen} onUpdate={updateBik}/>
        <Field name="bank_kpp" title="КПП" params={KppGenParam} generator={rndGen} />
        <Field name="bank_okpo" title="ОКПО" generator={okpoGen} />
        <Field name="bank_rs" title="Расчетный счет" params={ bikVal } generator={rsGen} />
        <Field name="bank_ks" title="Корреспондентский счет" params={ bikVal } generator={korGen} />
      </Card>
    </div>
  );
}
export { BankFields };
