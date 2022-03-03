const { Cadastro ,Cores, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const express = require('express');
const {check, validationResult, body} = require('express-validator')

const UserController = {
    index: async (req, res) => {
        let users = await Cadastro.findAll()
        return res.render('users', {users})
    },
    cadastro: async  (req, res) => 
    {
        return res.render('cadastro')
    },
    store: async (req, res) => {
        let listaDeErros = validationResult(req)
        if (listaDeErros.isEmpty()) {
            const {nome, preco, descricao, tamanho} = req.body
            const resultado = await Cadastro.create({
            nome,
            preco, 
            descricao,
            tamanho
        })
        console.log(resultado)
        return res.redirect('/users')
        }else {
            return res.render('cadastro', {errors: listaDeErros.errors})
        }
    },findById: async (req, res) => {
        let {id} = req.params

        let user = await Cadastro.findOne({
            where:{
                id_produto:id
            }
        })
        return res.render('produtos', {user})
    }, edit: async (req, res) => {
        const {id} = req.params

        const cadastro = await Cadastro.findByPk(id)
        return res.render('editarProduto', {cadastro})
    },update: async (req, res) => {
        
        const {nome, preco, descricao, tamanho, id} = req.body

        const resultado = await Cadastro.update({
            nome, preco, descricao, tamanho
        },
        {
            where: {
                id_produto: id
            }
        })
        
        console.log(resultado)

        return res.redirect('/users') 
    },
    delete: async (req, res) => {
        const { id } = req.params
        const resultado = await Cadastro.destroy({
            where: {
                id_produto: id
            }
        })

        return res.redirect('/users')
    },
    search: async (req, res) => {
        let {key} = req.query 

        let users = await Cadastro.findAll({
            
            where: {
                nome:{
                    [Op.like]: `${key}%`
                }
            },
            order: [
                ['id_produto']
            ]
        })
        
        return res.render('users', {users})
    }    

}       

module.exports = UserController