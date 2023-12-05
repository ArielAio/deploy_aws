const Sequelize = require('sequelize');
const sequelize = require('../src/db');

const Estagio = sequelize.define('estagio', {
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    requisitos: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

// sequelize
//     .sync({ force: true })
//     .then(() => {
//         console.log('Tabela criada no banco de dados');
//     })
//     .catch((error) => {
//         console.error('Erro ao criar a tabela:', error);
//     });

module.exports = Estagio;
