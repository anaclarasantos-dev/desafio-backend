
const conDB = require('../dao/dbTask');
const Usuarios = require('../models/usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

function listarUsuarios(req, res){
    conDB.query(Usuarios.toReadAll(), (err, result) => {
        if (err == null){
            res.json(result).status(200).end();
        } else {
            res.status(404).end();
        }
    })
}

function listarUsuario(req, res){

    conDB.query(Usuarios.toRead(req.params), (err, result) => {
        if (err == null){
            res.json(result).status(200).end();
        } else {
            res.status(404).end();
        }
    })
}

function cadastrarUsuario(req, res){
    const model = req.body;

    // senha protegida (hash)

    const senhaHash = bcrypt.hashSync(model.senha, 10);

    // substituindo a senha normal pela hash para ficar criptografada
    model.senha = senhaHash;

    conDB.query(Usuarios.toCreate(model), (err, result) => {
        if (err == null){
            res.json(result).status(200).end();
        } else {
            res.status(404).end();
        }
    })
}


const login = (req, res) => {
  conDB.query(Usuarios.toLogin(req.body), (err, result) => {
    if (err) return res.status(500).json(err).end();
    if (result.length === 0) return res.status(401).json({ msg: "Email ou senha inválidos" }).end();

    const usuario = result[0];
            // aplicando hash
            // compara a senha digitada com hash salvo
    const ok = bcrypt.compareSync(req.body.senha, usuario.senha);
    if (!ok) return res.status(401).json({ msg: "Email ou senha inválidos" }).end();

    const payload = {
      id_usuario: usuario.id_usuario,
      nome_usuario: usuario.nome_usuario,
      email: usuario.email,
      status_usuario: usuario.status_usuario
    };

    const token = jwt.sign(payload, process.env.KEY, { expiresIn: "20m" });

    return res.status(200).json({ ...payload, token }).end();
  });
};


function excluirUsuario(req,res){
    conDB.query(Usuarios.toDel(req.body), (err,result) => {
        if (err == null){
            res.json(result).status(200).end();
        }else {
            res.status(404).end()
        }
    })
}

function editarUsuario(req,res){
    conDB.query(Usuarios.toUpdate(req.body), (err,result) =>{
        if (err == null){
            res.json(result).status(200).end();
        }else {
            res.status(404).end()
        }
    })
}

function excluirMinhaConta(req, res) {
  const id_usuario = req.user.id_usuario;

  conDB.query(Usuarios.toDelById(id_usuario), (err, result) => {
    if (err != null) return res.status(500).json(err).end();
    if (result.affectedRows === 0) return res.status(404).json({ msg: "Usuário não encontrado" }).end();
    return res.status(200).json({ msg: "Conta deletada com sucesso" }).end();
  });
}


module.exports = {
    listarUsuarios,
    listarUsuario,
    cadastrarUsuario,
    login,
    excluirUsuario,
    editarUsuario,
    excluirMinhaConta
}
