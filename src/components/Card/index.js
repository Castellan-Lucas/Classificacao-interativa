import React from 'react'
import './Card.css'
import Icone from '../Icone'
import Texto from '../Titulo/index'
import Avaliacoes from '../Avaliacoes'

export default function Card() {


  return (
    <div className='container-card'>
        <Icone/>
        <Texto/>
      <div className='container-notas'>
        <Avaliacoes />
      </div>
    </div>
  )
}
