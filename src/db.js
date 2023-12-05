const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

async function testarConexao() {
    try {
        await sequelize.authenticate();
        console.log('Conexão realizada com sucesso!');
    } catch (error) {
        console.log('Não conectou com o banco: ' + error);
    }
}

testarConexao();

module.exports = sequelize;