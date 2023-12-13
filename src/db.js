const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', 'vorloktizz0wzjpmlm6o', 'pscale_pw_kTOy0k14fuc7wmQvyuHqpcG9HQonkh1u0Nf4mqvvjwK', {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Use esta opção com cuidado, dependendo da configuração do seu servidor
        },
      },
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