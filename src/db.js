const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', 'dc472rwr0pxa3ailg52n', 'pscale_pw_3kPs2ym4M0jNZxTkQF0m9JkQ7E7NbhkcPJqexCoM1db', {
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