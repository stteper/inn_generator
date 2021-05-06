import React from 'react';
import './sass/styles.sass'

import { Persons } from './components/persons';
import {BankFields} from "./components/bank_fields";
import {StringData} from "./components/string_data";

const App = () => (
  <>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-12">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Persons />
            </div>
            <div className="col-md-6">
              <BankFields />
              <StringData />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default App;
