CREATE DATABASE mercado;

\c mercado

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    validade VARCHAR(255) NOT NULL,
    photo TEXT,
    fornecedor_id INTEGER REFERENCES fornecedores(id)

);

CREATE TABLE fornecedores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO produtos (name, validade, photo, fornecedor_id) VALUES
    ('pão de batata', '23-05-2028', 'photo2', 1),
    ('pão de forma', '23-05-2027', 'photo3', 2),
    ('banana', '23-05-2026', 'photo4', 3),
    ('maça', '23-05-2025', 'photo5', 4),
    ('batata', '23-05-2024', 'photo6', 1),
    ('paleta', '23-05-2023', 'photo7', 2),
    ('tilapia', '23-05-2022', 'photo8', 3);



INSERT INTO fornecedores (name) VALUES
    ('fornecedor 1'),
    ('fornecedor 2'),
    ('fornecedor 3'),
    ('fornecedor 4');