const Sequelize = require('sequelize');
const sequelize = new Sequelize('estagio', 'jtqq645pi5g2yt6h2g6d', 'pscale_pw_YjiOA2DS2F2TNZASLunFfX44IfISuEuwXmJyfBpFRno', {
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