import { useState } from "react";

import Tarefa from "./componentes/tarefa";
import Search from "./componentes/search";
import TarefaForm from "./componentes/TarefaForm";
import Filter from "./componentes/filter";


import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const adicionarTarefa = (text, category) => {
    const newTarefa = [
      ...tarefas,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ];
    setTarefas(newTarefa);
  };

  const removeTarefa = (id) => {
    const newTarefas = [...tarefas]
    const filteredTarefas = newTarefas.filter((tarefa) =>
      tarefa.id !== id ? tarefa : null);
    setTarefas(filteredTarefas);
  }

  const completeTarefa = (id) => {
    const newTarefas = [...tarefas]
    newTarefas.map((tarefa) => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa

    );
    setTarefas(newTarefas);
  };
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />

      <Filter filter={filter} setFilter={setFilter} />

      <div className="tarefa-list">


        {tarefas
          .filter((tarefa) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? tarefa.isCompleted
                : !tarefa.isCompleted
          )
          .filter((tarefa) =>
            tarefa.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((tarefa) => (
            <Tarefa key={tarefa.id} tarefa={tarefa} removeTarefa={removeTarefa} completeTarefa={completeTarefa} />

          ))}
      </div>
      <TarefaForm adicionarTarefa={adicionarTarefa} />
    </div>
  );
}


export default App;
