const Express = require ('express');

const router = Express.Router();


const { autenticacao, soAdmin } = require('./middlewares/autenticacao');


const tarefascontroller = require("./controllers/tarefascontroller");

router.get("/tarefas", autenticacao, tarefascontroller.listarTarefas); 
router.get("/tarefas/:id_tarefa", autenticacao, tarefascontroller.listarTarefa)
router.post("/tarefas", autenticacao ,tarefascontroller.addTarefa);
router.delete("/tarefas", autenticacao, tarefascontroller.excluirTarefa);
router.put("/tarefas", autenticacao, tarefascontroller.editarTarefa);

const usuarioscontroller = require("./controllers/usuarioscontroller");

router.get("/usuarios", usuarioscontroller.listarUsuarios);
router.get("/usuarios/:id_usuario", autenticacao, soAdmin, usuarioscontroller.listarUsuario);
router.post("/usuarios", usuarioscontroller.cadastrarUsuario);
// router.delete("/usuarios/:id_usuario", autenticacao, soAdmin, usuarioscontroller.excluirUsuarioAdmin);
// router.put("/usuarios/:id_usuario", autenticacao, soAdmin, usuarioscontroller.editarUsuarioAdmin);

router.post("/login", usuarioscontroller.login);

router.delete("/me", autenticacao, usuarioscontroller.excluirMinhaConta);

module.exports = router;