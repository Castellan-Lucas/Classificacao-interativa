import React from 'react'
import './Botao.css';
import '../Avaliacoes/index'

export default function Botao({ enviarNota }) {
  return (
    <div className='container-botao'>
      <button onClick={enviarNota} className='botaoSub'>SUBMIT
        </button>
    </div>
  )
}
