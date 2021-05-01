import BaseGenerator from "../common/generator";
import React, { useState } from 'react';

export interface IField {
  name: string,
  title: string,
  generator: BaseGenerator
}

const Field : React.FC<IField> = ({ name, title , generator}) => {
  const [val, setVal] = useState<string>(generator.generate());

  function valRefresh() {
    setVal(generator.generate());
  }

  const copyEventListener = (e: ClipboardEvent) => {
    if(e.clipboardData!== null) {
      e.clipboardData.setData('text/plain', val);
      e.preventDefault();
      document.removeEventListener('copy', copyEventListener);
    }
  }

  function copyToClipboard() {
    document.addEventListener('copy', copyEventListener);
    document.execCommand('copy');
  }

  return (
    <>
      <label htmlFor={name}>{title}</label>
      <div className={`input-group field-${name} mb-3`}>
        <input type="text" className="form-control" placeholder={title} aria-label={title}
               aria-describedby={`basic-${name}`} id={name} readOnly={true} value={val}/>
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" onClick={copyToClipboard}><i className="far fa-copy"></i></button>
            <button className="btn btn-outline-secondary" type="button" onClick={valRefresh}><i className="fas fa-sync"></i></button>
          </div>
      </div>
    </>
  );
}
export { Field };