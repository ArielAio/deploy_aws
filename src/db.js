const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', '4xlhhqiignld5l02687p', 'pscale_pw_FTgyDYLsmKQ6oKRbuLt4u9Cse2JhqgoNPvn3rYdsDL0', {
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