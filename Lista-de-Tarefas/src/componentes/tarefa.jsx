import React from "react";

const Tarefa = ({ tarefa, removeTarefa, completeTarefa }) => {
    return (
        <div className="tarefa"
            style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}>
            <div className="content">
                <p>{tarefa.text}</p>
                <p className="category">({tarefa.category})</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTarefa(tarefa.id)}  >Completar</button>
                <button className="remove" onClick={() => removeTarefa(tarefa.id)}>x</button>

            </div>
        </div>
    );
};

export default Tarefa;