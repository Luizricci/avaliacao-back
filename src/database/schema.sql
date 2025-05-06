CREATE DATABASE mercado;

\c mercado

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    validade VARCHAR(255) NOT NULL,
    photo TEXT 
);

CREATE TABLE fornecedores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    produto_id INTEGER REFERENCES produtos(id)
);

INSERT INTO produtos (name, validade, photo) VALUES
    ('pão de forma', '23-04-2030','photo1'),
    ('pão de forma', '23-04-2028','photo2'),
    ('pão de forma', '23-04-2027','photo3'),
    ('pão de batata', '23-05-2028', 'photo2');