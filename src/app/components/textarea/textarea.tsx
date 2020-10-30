import React, { useState, useEffect } from 'react';

import './styles.css';

const MAX_COUNTER = 280;

type TextAreaProps = {
  label?: string,
  handleBtnTwittar: any,
}

const TextArea = ({ label, handleBtnTwittar }: TextAreaProps) => {
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(MAX_COUNTER);

  useEffect(() => {
    const calculaCaracterRestante = () => {
      return MAX_COUNTER - value.length;
    }

    setCounter(calculaCaracterRestante);
  }, [value])

  const handleInputChange = (value: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = value.target.value;
    setValue(inputValue);
  }

  return (
    <div>
      <div className="form-group">
        <label className="label-textArea" htmlFor="textArea">{label}</label>
        <textarea
          id="textArea"
          className="textArea form-control"
          onChange={(value) => handleInputChange(value)}
          value={value}
        />
        <div className="d-flex justify-content-between my-1">
          <small className="form-text text-muted">{counter} caracter(es) restantes.</small>
          <button className="btn btn-outline-primary" onClick={() => handleBtnTwittar(value)}>Twittar</button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;