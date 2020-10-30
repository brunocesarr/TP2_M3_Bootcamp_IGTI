import './styles.css';

import React, { useEffect, useState } from 'react';

const MAX_COUNTER = 280;

type TextAreaProps = {
  label?: string,
  handleBtnTwittar: any,
}

const TextArea = ({ label, handleBtnTwittar }: TextAreaProps) => {
  const [value, setValue] = useState<string>('');
  const [counter, setCounter] = useState<number>(MAX_COUNTER);
  const [status, setStatus] = useState<string>('green')

  useEffect(() => {
    const calculaCaracterRestante = () => {
      return MAX_COUNTER - value.length;
    }
    setCounter(calculaCaracterRestante);
  }, [value]);

  useEffect(() => {
    const validarStatusCaracters = () => {
      if (counter >= 10) {
        setStatus('green');
      } else if (counter >= 0) {
        setStatus('orange');
      } else {
        setStatus('red')
      }
    }

    validarStatusCaracters();
  }, [counter])

  const handleInputChange = (value: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = value.target.value;
    setValue(inputValue);
  }

  const validarTweet = () => {
    if (value.trim() === '') {
      return false;
    } else if (value.length > 280) {
      return false;
    }
    return true
  }

  const salvarTweet = () => {
    if (validarTweet()) {
      handleBtnTwittar(value);
      setValue('');
    } else {
      alert("Tweet Inválido!");
    }
  }

  const verificaTeclas = (event: any) => {
    var enterCode = 13;

    if(event.nativeEvent.ctrlKey && (event.keyCode === enterCode)){
      salvarTweet();
    }   
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
          onKeyUp={verificaTeclas}
        />
        <div className="d-flex justify-content-between my-1">
          <small className="form-text" style={{color: status}}>{counter} caracter(es) restantes.</small>
          <button className="btn btn-outline-primary" onClick={() => {salvarTweet()}}>Twittar</button>
        </div>
      </div>
    </div>
  );
};

export default TextArea;