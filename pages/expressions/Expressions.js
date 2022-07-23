import React, { useState } from 'react';
import Header from '../Components/header/Header';
import Expressions from '../expressionsList';

export default function Teste() {
  const [phrase, setPhrase] = useState('');

  const vamoVe = () => {
    const arr = Expressions();
    const randomNumber = Math.floor(Math.random() * 23);

    if (phrase === arr[randomNumber]) {
      return setPhrase(arr[randomNumber + 1]);
    }
    return setPhrase(arr[randomNumber]);
  };

  return (
    <>
      <Header />
      <h2>Gerar expressões</h2>
      <p>{phrase}</p>
      <button onClick={vamoVe}>Gerar</button>
    </>
  );
}
