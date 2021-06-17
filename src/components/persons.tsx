import {Card} from "./card";
import {Colors} from "../common/color";
import {Field} from "./field";
import React from "react";

import InnGenerator from '../common/inn_generator';
import InnflGenerator from '../common/innfl_generator';
import OgrnGenerator from '../common/ogrn_generator';
import OgrnipGenerator from "../common/ogrnip_generator";
import SnilsGenerator from "../common/snils_generator";
import EmailGenerator from "../common/email_generator";

const innGen = new InnGenerator();
const innFlGen = new InnflGenerator();
const ogrnGen = new OgrnGenerator();
const ogrnipGen = new OgrnipGenerator();
const snilsGen = new SnilsGenerator();
const emailGen = new EmailGenerator();

const Persons : React.FC = () => {
  return (
    <>
      <div className="mb-5 text-center">
        <Card title="Физ. лицо" color={Colors.info}>
          <Field name="inn_fl" title="ИНН" generator={innFlGen} />
          <Field name="snils_fl" title="СНИЛС" generator={snilsGen} />
          <Field name="email_fl" title="EMail" generator={emailGen} />
        </Card>
      </div>
      <div className="mb-5 text-center">
        <Card title="ИП" color={Colors.danger}>
          <Field name="inn_ip" title="ИНН" generator={innFlGen} />
          <Field name="ogrn_ip" title="ОГРНИП" generator={ogrnipGen} />
        </Card>
      </div>
      <div className="mb-5 text-center">
        <Card title="Юр. лицо" color={Colors.warning}>
          <Field name="inn_ul" title="ИНН" generator={innGen} />
          <Field name="ogrn" title="ОГРН" generator={ogrnGen} />
        </Card>
      </div>
    </>
  );
}

export { Persons };