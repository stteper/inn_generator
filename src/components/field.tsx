import BaseGenerator,{ IGenParam } from "../common/generator";
import React, { useState, useEffect } from 'react';

export interface IField {
  name: string,
  title: string,
  generator: BaseGenerator,
  params?: IGenParam,
  onUpdate?: (val: string)=> void
}

const Field : React.FC<IField> = ({ name, title , generator,params, onUpdate}) => {
  const [val, setVal] = useState<string>(generator.generate(params));

  function valRefresh() {
    const newVal = generator.generate(params);
    setVal(newVal);
    if(typeof(onUpdate) === 'function') {
      onUpdate(newVal);
    }
  }

  useEffect(() => {
    const newVal = generator.generate(params);
    setVal(newVal);
  }, [params, generator]);

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