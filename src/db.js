const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', 'rn1kjw9uekfmkbg3uast', 'pscale_pw_F2Em8DMCjzRxGYHpQgO9m2rgDZp59H6OTlGmVNsoH56', {
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