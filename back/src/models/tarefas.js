const toCrate = (model, id_usuario) =>{
    return `INSERT INTO tarefas 
    (id_usuario, titulo, descricao, prioridade, progresso, data_final)
    VALUES(${id_usuario}, '${model.titulo}','${model.descricao}','${model.prioridade}','${model.progresso}','${model.data_final}'
    )`;
}

const toReadAll = () => {
    return `SELECT * FROM tarefas ORDER BY id_tarefa ASC`;
}

const toRead = (model) => {
    return `SELECT * FROM tarefas WHERE id_tarefa = ${model.id_tarefa}`;
}

const toDel = (model, id_usuario) => {
    return `DELETE FROM tarefas 
    WHERE id_tarefa = ${model.id_tarefa} AND id_usuario = ${id_usuario}`;
}

const toUpdate = (model, id_usuario) => {
    return `UPDATE tarefas SET titulo = '${model.titulo}', descricao =  '${model.descricao}',
    prioridade = '${model.prioridade}', progresso = '${model.progresso}',
    data_final = '${model.data_final}' where id_tarefa = ${model.id_tarefa} AND id_usuario = ${id_usuario}` ;
}

// ler uma tarefa só do usuário
const tarefasUsuario = (id_tarefa, id_usuario) => {
  return `SELECT * FROM tarefas 
  WHERE id_tarefa = ${id_tarefa} AND id_usuario = ${id_usuario}`;
}


// listar só as tarefas do usuário

const tarefasIDusuario = (id_usuario) => {
  return `SELECT * FROM tarefas 
          WHERE id_usuario = ${id_usuario}
          ORDER BY id_tarefa ASC`;
}


module.exports = {
    toCrate,
    toReadAll,
    toRead,
    toDel,
    toUpdate,
    tarefasIDusuario,
    tarefasUsuario
}