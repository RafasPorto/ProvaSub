import axios from "axios";
import { useEffect, useState } from "react";

function ListarComputadores() {
  const [computadores, setComputadores] = useState([]);

  function carregarInfo() {
    axios
      .get("http://localhost:3333/computador/listar")
      .then((resposta) => {
        setComputadores(resposta.data.info);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  useEffect(() => {
    carregarInfo();
  }, []);

  function deletar(id: number) {
    axios
      .delete("http://localhost:3333/computador/deletar/" + id)
      .then((resposta) => {
        carregarInfo();
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1>Listagem de computadores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dono</th>
            <th>Placa mãe</th>
            <th>Processador</th>
            <th>Memória</th>
            <th>Armazenamento</th>
            <th>Fonte</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {computadores.map((computador: any) => (
            <tr>
              <td>{computador.id}</td>
              <td>{computador.dono}</td>
              <td>{computador.placamae}</td>
              <td>{computador.processador}</td>
              <td>{computador.memoria}</td>
              <td>{computador.armazenamento}</td>
              <td>{computador.fonte}</td>
              <td>{computador.criadoEm}</td>
              <td>
                <button onClick={() => deletar(computador.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarComputadores;