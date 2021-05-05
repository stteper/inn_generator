import React from 'react';
import './sass/styles.sass'

import { Card } from './components/card';
import { Colors } from './common/color';
import { Field } from './components/field';
import { Persons } from './components/persons';

import BikGenerator from "./common/bik_generator";

const bikGen = new BikGenerator();

const App = () => (
  <>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-sm-12">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Persons />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-5 text-center">
                  <Card title="Банковские данные" color={Colors.secondary}>
                    <Field name="inn_ul" title="БИК" generator={bikGen} key={1} />
                    <Field name="ogrn" title="КПП" generator={bikGen} key={2} />
                    <Field name="ogrn" title="ОКПО" generator={bikGen} key={2} />
                    <Field name="ogrn" title="Расчетный счет" generator={bikGen} key={2} />
                    <Field name="ogrn" title="Корреспондентский счет" generator={bikGen} key={2} />
                  </Card>
                </div>
                <div className="col-12 mb-5 text-center">
                  <Card title="Строковые данные" color={Colors.info}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">Валидатор</label>
                          <select className="form-control" id="exampleFormControlSelect1">
                            <option>main</option>
                            <option>main_ru</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect1">Количество символов</label>
                          <input type="text" className="form-control" id="formGroupExampleInput"
                                 placeholder="Example input" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea className="form-control" id="formGroupExampleInput"
                                    placeholder="Example input">
                            fdgfd dfg dfg dfgdfg dfg dfg dfg dg dfg dfg dfg dfg dfg dfgfdgdg
                          </textarea>
                        </div>
                      </div>
                      <div className="col-12 text-right">
                        <button className="btn btn-outline-primary" type="button" ><i className="far fa-copy"></i></button>
                        <button className="btn btn-outline-secondary" type="button" ><i className="fas fa-sync"></i></button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
