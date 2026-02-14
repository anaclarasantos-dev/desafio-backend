drop database if exists taskmanager;
create database taskmanager charset=UTF8 collate UTF8_general_ci;
use taskmanager;

-- CRIANDO TABELA USUARIOS
create table usuarios(
    id_usuario int not null primary key auto_increment,
    nome_usuario VARCHAR (30) NOT NULL,
    email VARCHAR (100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    status_usuario VARCHAR (20) NOT NULL DEFAULT 'comum'
);

-- CRIANDO TABELA TAREFAS
create table tarefas(
    id_tarefa integer not null primary key auto_increment,
    id_usuario int not null,
    titulo varchar(30) not null,
    descricao varchar(100),
    prioridade varchar(30) not null,
    progresso varchar(30) not null,
    data_criacao timestamp default CURRENT_TIMESTAMP, -- salva automaticamente a data
    data_final DATE,
    CONSTRAINT fk_tarefas_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

LOAD DATA LOCAL INFILE 'C:/Users/Usuario/Desktop/desafio_backend/bd/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(nome_usuario, email, senha, status_usuario);

LOAD DATA LOCAL INFILE 'C:/Users/Usuario/Desktop/desafio_backend/bd/tarefas.csv'
INTO TABLE tarefas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(id_usuario, titulo, descricao, prioridade, progresso, data_criacao, data_final);

select * from usuarios;
select * from tarefas;