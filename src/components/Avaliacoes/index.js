import React, { useState } from 'react';
import './Avaliacoes.css';
import Botao from '../Botao';
import Obrigado from '../Obrigado';

export default function Avaliacoes() {
  const [notas, setNotas] = useState('');
  const [estado, setEstado] = useState(false);

  const darNota = (nota) => {
    setNotas(nota);
    
  };

  const enviarNota = () => {
    setEstado(true);
    alert(notas)
  };

  const renderNotas = () => {
    return [1, 2, 3, 4, 5].map((nota) => (
      <li
        className={`notas ${notas === nota ? 'bold' : ''}`}
        key={nota}
        onClick={() => darNota(nota)}
      >
        <span>{nota}</span>
      </li>
    ));
  };

  return (
    <div className="container-avaliacoes">
      {!estado ? (
        <ul>{renderNotas()}</ul>
      ) : (
        <Obrigado mensagem={`Obrigado pela avaliação! Nota: ${notas}`} />
      )}
      <div className="container-botao">
        {!estado && <Botao enviarNota={enviarNota} />}
      </div>
    </div>
  );
}
