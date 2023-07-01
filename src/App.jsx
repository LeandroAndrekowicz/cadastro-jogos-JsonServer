import { useEffect, useState } from 'react'
import './App.css'
import api from './service/api';
import Lista from './componentes/Lista';

function App() {
  const [jogos, setJogos] = useState([]);
  const [jogo, setJogo] = useState({
    nome: "",
    valor: 0,
    plataforma: "",
    genero: "",
    desenvolvedor: ""
  });

  const aoAlterar = (e) =>{
    let novoJogo = {
      ...jogo,
      [e.target.name]: e.target.value
    }
    setJogo(novoJogo);
  }

  const aoSubmeter = (e) =>{
    e.preventDefault();
    api.post('/jogos', jogo).then((res) =>{
      alert('Jogo adicionado com sucesso!');
      setJogo({
        nome: "",
        valor: 0,
        plataforma: "",
        genero: "",
        desenvolvedor: ""
      })
      getJogos();
    }).catch((err) =>{
      alert('Erro ao adicionar o jogo', err);
    });
  }

  async function getJogos() {
    await api.get('/jogos').then((res) =>{
      setJogos(res.data);
    })
  }

  useEffect(() =>{
    getJogos();
  }, []);

  return (
    <>
    <h2>Adicione um novo jogo para sua lista</h2>
      <div className='card'>
        <form onSubmit={aoSubmeter}>
        <div>
            <label className='nome'>Nome</label>
            <input required className="inputs" type='text' name='nome' value={jogo.nome} onChange={aoAlterar} placeholder='Digite o nome'/>
          </div>
          <div>
            <label className='valor'>Valor</label>
            <input required className="inputs" type='number' name='valor' value={jogo.valor} onChange={aoAlterar}/>
          </div>
          <div>
            <label className='plataforma'>Plataforma</label>
            <input required className="inputs" type='text' name='plataforma' value={jogo.plataforma} onChange={aoAlterar} placeholder='Digite a plataforma'/>
          </div>
          <div>
            <label className='genero'>Genero</label>
            <input required className="inputs" type='text' name='genero' value={jogo.genero} onChange={aoAlterar} placeholder='Digite o genero'/>
          </div>
          <div>
            <label className='desenvolvedor'>Desenvolvedor</label>
            <input required className='inputs' type='text' name='desenvolvedor' value={jogo.desenvolvedor} onChange={aoAlterar} placeholder='Digite o desenvolvedor'/>
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
      <Lista key={jogo.id} values={jogos} />

    </>
  )
}

export default App
