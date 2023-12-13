const dotenv = require('dotenv');
dotenv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', process.env.USER_DB, process.env.PASSWORD_DB, {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Use esta opção com cuidado, dependendo da configuração do seu servidor
        },
    },
    // Adicione a opção 'token' conforme necessário
    token: 'pscale_tkn_zRjKCZcfYYm97h5q8rwSp9sLnYV2s91KV5R0HgP3LiE',
});

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
