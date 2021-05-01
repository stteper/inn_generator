import React from 'react';
import './sass/styles.sass'

import { Card } from './components/card';
import { Colors } from './common/color';
import { Field } from './components/field';
import InnGenerator from './common/inn_generator';
import InnflGenerator from './common/innfl_generator';
import OgrnGenerator from './common/ogrn_generator';
import OgrnipGenerator from "./common/ogrnip_generator";
import SnilsGenerator from "./common/snils_generator";

const innGen = new InnGenerator();
const innFlGen = new InnflGenerator();
const ogrnGen = new OgrnGenerator();
const ogrnipGen = new OgrnipGenerator();
const snilsGen = new SnilsGenerator();

const App = () => (
  <>
    <div className="container-fluid h-100">
      <div className="row align-items-center h-100">
        <div className="col-sm-12">
          <div className="row justify-content-center">
            <div className="col-4 text-center">
              <Card title="Физ. лицо" color={Colors.info}>
                <Field name="inn_fl" title="ИНН" generator={innFlGen} key={1} />
                <Field name="snils_fl" title="СНИЛС" generator={snilsGen} key={2} />
              </Card>
            </div>
            <div className="col-4 text-center">
              <Card title="ИП" color={Colors.danger}>
                <Field name="inn_ip" title="ИНН" generator={innFlGen} key={1} />
                <Field name="ogrn_ip" title="ОГРНИП" generator={ogrnipGen} key={2} />
              </Card>
            </div>
            <div className="col-4 text-center">
              <Card title="Юр. лицо" color={Colors.warning}>
                <Field name="inn_ul" title="ИНН" generator={innGen} key={1} />
                <Field name="ogrn" title="ОГРН" generator={ogrnGen} key={2} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
