const conDB = require('../dao/dbTask');
const Tarefas = require('../models/tarefas')

// função de listar todas as tarefas

function listarTarefas(req, res){
  const id_usuario = req.user.id_usuario;
  const status = req.user.status_usuario;

   // se for admin consegue ver todas as tarefas
  if (status === "admin") {
    return conDB.query(Tarefas.toReadAll(), (err, result) => {
      if (err) return res.status(500).json(err).end();
      return res.status(200).json(result).end();
    });
  }
 // conDB.query → executa uma consulta no SQL (banco de dados)
    // Tarefas.toReadAll() → função do DAO/Model que retorna o SELECT * FROM tarefas
    // (err, result) → callback executado após a consulta
    // err = erro (tomara q n aconteça)
    // result = dados retornados do banco (sucesso)
  return conDB.query(Tarefas.tarefasIDusuario(id_usuario), (err, result) => {
    if (err) return res.status(500).json(err).end();
    return res.status(200).json(result).end();
  });
}


function listarTarefa(req, res){
  const id_usuario = req.user.id_usuario;
  const id_tarefa = req.params.id_tarefa;

  conDB.query(Tarefas.tarefasUsuario(id_tarefa, id_usuario), (err, result) => {
    if (err != null) return res.status(500).json(err).end();
    if (result.length == 0) return res.status(404).json({ msg: "Tarefa não encontrada" }).end();
    res.status(200).json(result).end();
  })
}


function addTarefa (req,res) {
    const id_usuario = req.user.id_usuario;

    conDB.query(Tarefas.toCrate(req.body, id_usuario), (err,result) => {
        if (err == null){
            res.json(result).status(200).end();
        }else {
            console.log(err); 
            res.status(500).end()
        }
    })
}

function editarTarefa(req,res){
    const id_usuario = req.user.id_usuario;

    conDB.query(Tarefas.toUpdate(req.body, id_usuario), (err,result) =>{
        if (err != null) return res.status(500).end();
        if (result.affectedRows == 0) return res.status(404).json({ msg: "Não atualizou (não existe ou não é sua)" }).end();
            res.json(result).status(200).end();
    })
}

function excluirTarefa(req,res){
    const id_usuario = req.user.id_usuario;

    conDB.query(Tarefas.toDel(req.body, id_usuario), (err,result) => {
       if (err != null) return res.status(500).json(err).end();
    if (result.affectedRows == 0) return res.status(404).json({ msg: "Não deletou (não existe ou não é sua)" }).end();
    res.status(200).json(result).end();
  })
}

module.exports = {
    listarTarefas,
    listarTarefa,
    addTarefa,
    editarTarefa,
    excluirTarefa
}