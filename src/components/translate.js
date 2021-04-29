import React, { useState } from 'react';
import Convert from './convert';
import DropDown from './dropdown';

const options = [
  {
    label: 'Afrikans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'Hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState('');

  return (
    <div className="container">
      <div className="row w-50 p-3">
        <label className="form-label">Enter Text</label>
        <div className="input-group mb-3">
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>
      <div className="row w-50 p-3">
        <DropDown
          options={options}
          selected={language}
          setOnSelectionChange={setLanguage}
          label={'Select Language'}
        />
        <hr />
        <h3>Output:</h3>
        <Convert lang={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
