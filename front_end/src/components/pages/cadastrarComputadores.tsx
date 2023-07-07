import axios from "axios";
import { useState } from "react";
import { Computador } from "../../models/computador.models";

function CadastroComputadores() {
  const [dono, setDono] = useState("");
  const [placamae, setPlacaMae] = useState("");
  const [processador, setProcessador] = useState("");
  const [memoria, setmemoria] = useState("");
  const [armazenamento, setArmazenamento] = useState("");
  const [fonte, setFonte] = useState("");

  function mandar() {
    let computador: Computador = new Computador();
    
        computador.dono = dono;
        computador.placamae = placamae;
        computador.processador = processador;
        computador.memoria = Number.parseInt(memoria);
        computador.armazenamento = armazenamento;
        computador.fonte = fonte;

    axios
      .post("http://localhost:3333/computador/cadastrar", computador)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
        setDono("");
        setPlacaMae("");
        setProcessador("");
        setmemoria("");
        setArmazenamento("");
        setFonte("");
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Produto</h1>
      <div>
        <label>Nome do dono:</label>
        <input
          type="text"
          onChange={(event: any) => setDono(event.target.value)}
        />
      </div>
      <div>
        <label>Placa mãe:</label>
        <input
          type="text"
          onChange={(event: any) => setPlacaMae(event.target.value)}
        />
      </div>
      <div>
        <label>Processador:</label>
        <input
          type="text"
          onChange={(event: any) => setProcessador(event.target.value)}
        />
      </div>
      <div>
        <label>Memória:</label>
        <input
          type="number"
          onChange={(event: any) => setmemoria(event.target.value)}
        />
      </div>
      <div>
        <label>Armazenamento:</label>
        <input
          type="text"
          onChange={(event: any) => setArmazenamento(event.target.value)}
        />
      </div>
      <div>
        <label>Fonte:</label>
        <input
          type="text"
          onChange={(event: any) => setFonte(event.target.value)}
        />
      </div>
      <div>
        <button onClick={mandar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default CadastroComputadores;