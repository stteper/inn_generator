import {Card} from "./card";
import {Colors} from "../common/color";
import React, {ChangeEvent, KeyboardEvent, useState, useCallback} from "react";
import {Field} from "./field";
import RandGenerator, {IRndGenParam} from "../common/rand_generator";
import {digits, lat, rus, spec} from "../common/symbols";

const rndGen = new RandGenerator();

interface IValidatorItem {
  name: string,
  id: string,
  vocab: string
}

const validatorItems:Array<IValidatorItem> = [
  {
    name: 'main',
    id: 'main',
    vocab: rus + rus.toUpperCase() + lat + lat.toUpperCase() + digits + spec + ':;*'
  },
  {
    name: 'main_ru',
    id: 'main_ru',
    vocab: rus + rus.toUpperCase() + digits + spec
  }
]

interface IStringState {
  num: number,
  validator: string
}

const StringData : React.FC = () => {
  const [valStr, setStrVal] = useState<IStringState>({num: 1000,validator: validatorItems[0].id});
  const currentValidator = validatorItems.find((el) => {
      return el.id === valStr.validator;
    });
  const genParam: IRndGenParam = {
    vocab: currentValidator === undefined ? '' : currentValidator.vocab,
    len: valStr.num
  }

  const changeValidator = useCallback((event: ChangeEvent<HTMLSelectElement>): void => {
    setStrVal({
      ...valStr,
      validator: event.target.value
    });
  }, [valStr]);

  const changeNum = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const val = +event.target.value;
    setStrVal({
      ...valStr,
      num: Math.min((isNaN(val) || val < 0) ? 0 : val, 5000)
    });
  },[valStr]);


  const pressInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if( isNaN(+e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="mb-5 text-center">
      <Card title="Строковые данные" color={Colors.primary}>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Валидатор</label>
              <select className="form-control" id="exampleFormControlSelect1" value={valStr.validator} onChange={changeValidator}>
                {validatorItems.map((val) => (
                  <option key={val.id} value={val.id}>
                    {val.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Количество символов</label>
              <input type="text" className="form-control" id="formGroupExampleInput"
                     placeholder="1000" value={valStr.num} onChange={changeNum} onKeyPress={pressInputKey}/>
            </div>
          </div>
          <div className="col-12">
            <Field name="rand_str" title="Данные" generator={rndGen} asText={true} params={genParam}/>
          </div>
        </div>
      </Card>
    </div>
  )
}
export { StringData };