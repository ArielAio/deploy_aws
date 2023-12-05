const express = require('express')
const app = express()
const Estagio = require('../models/Estagio.js')

app.use(express.json())

app.get('/', (req, res) => {
    res.json('api funcionando, tente /cadastrar ou /listar')
})

app.post('/cadastrar', async (req, res) => {
    try {
        const createdEstagio = await Estagio.create(
            {
                titulo: req.body.titulo,
                requisitos: req.body.requisitos,
            }
        );

        const result = await Estagio.findByPk(req.params.id);
        return res.json("Registro cadastrado com sucesso!");
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.get('/listar', async (req, res) => {
    try {
        const estagios = await Estagio.findAll();

        if (!estagios) {
            return res.status(404).json({ error: 'Nenhum registro encontrado' });
        }

        return res.json(estagios);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.delete('/deletar/:id', async (req, res) => {
    try {
        const deletedEstagio = await Estagio.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deletedEstagio) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }

        return res.json({ message: 'Registro deletado com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.put('/editar/:id', async (req, res) => {
    try {
        const updatedEstagio = await Estagio.update(
            {
                titulo: req.body.titulo,
                requisitos: req.body.requisitos,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!updatedEstagio) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }

        const result = await Estagio.findByPk(req.params.id);
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
});


app.listen(8080)