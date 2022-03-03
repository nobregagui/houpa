module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro', {
        id_produto: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: DataTypes.STRING,
        preco: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        descricao: {
            type: DataTypes.STRING
        },        
        tamanho: {
            type: DataTypes.STRING
        }
        },       
        {
            tableName: 'cadastro',
            timestamps:false
        }

        
    )
    return Cadastro
}