import React from 'react'
import '../Lista/Lista.css'

const Lista = ({values}) => {
  return (
    <table className='itens'>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Plataforma</th>
                <th>Genero</th>
                <th>Desenvolvedor</th>
            </tr>
        </thead>
        <tbody>
        {values.map((item) =>{
            return(
                <>
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>R$ {item.valor}</td>
                        <td>{item.plataforma}</td>
                        <td>{item.genero}</td>
                        <td>{item.desenvolvedor}</td>
                    </tr>
                </>
            )
        })}
    </tbody>
    </table>
  )
}

export default Lista