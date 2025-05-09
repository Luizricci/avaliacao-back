PGDMP      9    
            }            mercado    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16431    mercado    DATABASE     m   CREATE DATABASE mercado WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE mercado;
                     postgres    false            �            1259    16442    fornecedores    TABLE     h   CREATE TABLE public.fornecedores (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);
     DROP TABLE public.fornecedores;
       public         heap r       postgres    false            �            1259    16441    fornecedores_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fornecedores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.fornecedores_id_seq;
       public               postgres    false    218            �           0    0    fornecedores_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.fornecedores_id_seq OWNED BY public.fornecedores.id;
          public               postgres    false    217            �            1259    16449    produtos    TABLE     �   CREATE TABLE public.produtos (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    validade character varying(255) NOT NULL,
    photo text,
    fornecedor_id integer
);
    DROP TABLE public.produtos;
       public         heap r       postgres    false            �            1259    16448    produtos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.produtos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.produtos_id_seq;
       public               postgres    false    220            �           0    0    produtos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.produtos_id_seq OWNED BY public.produtos.id;
          public               postgres    false    219            \           2604    16445    fornecedores id    DEFAULT     r   ALTER TABLE ONLY public.fornecedores ALTER COLUMN id SET DEFAULT nextval('public.fornecedores_id_seq'::regclass);
 >   ALTER TABLE public.fornecedores ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            ]           2604    16452    produtos id    DEFAULT     j   ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produtos_id_seq'::regclass);
 :   ALTER TABLE public.produtos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            �          0    16442    fornecedores 
   TABLE DATA           0   COPY public.fornecedores (id, name) FROM stdin;
    public               postgres    false    218   /       �          0    16449    produtos 
   TABLE DATA           L   COPY public.produtos (id, name, validade, photo, fornecedor_id) FROM stdin;
    public               postgres    false    220   i                   0    0    fornecedores_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.fornecedores_id_seq', 5, true);
          public               postgres    false    217                       0    0    produtos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.produtos_id_seq', 7, true);
          public               postgres    false    219            _           2606    16447    fornecedores fornecedores_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.fornecedores
    ADD CONSTRAINT fornecedores_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.fornecedores DROP CONSTRAINT fornecedores_pkey;
       public                 postgres    false    218            a           2606    16456    produtos produtos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_pkey;
       public                 postgres    false    220            b           2606    16457 $   produtos produtos_fornecedor_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_fornecedor_id_fkey FOREIGN KEY (fornecedor_id) REFERENCES public.fornecedores(id);
 N   ALTER TABLE ONLY public.produtos DROP CONSTRAINT produtos_fornecedor_id_fkey;
       public               postgres    false    218    4703    220            �   *   x�3�L�/�KMNM�/R0�2B�q#s��L��&\1z\\\ ���      �   �   x�]��	�0����Y %��8��␔���S��,ݤ�T HM��{������K3Ţ���-w<"_SI���]�}�6�6&�oz?���y�*��<���pд>��R�m�u�y��MG��OD�;
     