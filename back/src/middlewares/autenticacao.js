const jwt = require('jsonwebtoken');
require('dotenv').config();

function autenticacao(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Token não enviado" }).end();
  }

  jwt.verify(token, process.env.KEY, (err, data) => {
    if (err) {
      return res.status(401).json({ msg: "Token inválido ou expirado" }).end();
    }

    // usuario
    req.user = data;

    next();
  });
}
function soAdmin(req, res, next) {
  // req.user vem do seu middleware de autenticacao
  if (!req.user) return res.status(401).json({ msg: "Não autenticado" }).end();

  if (req.user.status_usuario !== "admin") {
    return res.status(403).json({ msg: "Acesso permitido apenas para admin" }).end();
  }

  next();
}

module.exports = {
    autenticacao,
    soAdmin

};
