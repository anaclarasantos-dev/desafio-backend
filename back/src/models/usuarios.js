const toCreate = (model) => {
    // cadastra usuário
    return `INSERT INTO usuarios (nome_usuario, email, senha, status_usuario)
            VALUES ('${model.nome_usuario}', '${model.email}', '${model.senha}', '${model.status_usuario || "comum"}')`;
}

const toReadAll = () => {
    return `SELECT id_usuario, nome_usuario, email, status_usuario FROM usuarios ORDER BY id_usuario ASC`;
}

const toRead = (model) => {
    return `SELECT id_usuario, nome_usuario, email, status_usuario 
            FROM usuarios WHERE id_usuario = ${model.id_usuario}`;
}

const toLogin = (model) => {
    return `SELECT * FROM usuarios 
            WHERE email = '${model.email}'`;
}

const toDel = (model) => {
    return `DELETE FROM usuarios WHERE id_usuario = ${model.id_usuario}`;
}


const toUpdate = (model) => {
    return `UPDATE usuarios SET nome = '${model.nome_usuario}', email =  '${model.email}',
    senha = '${model.senha}', where id_usuario = ${model.id_usuario} ` ;
}

const toDelById = (id_usuario) => {
  return `DELETE FROM usuarios WHERE id_usuario = ${id_usuario}`;
}



module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toLogin,
    toDel,
    toUpdate,
    toDelById
}
