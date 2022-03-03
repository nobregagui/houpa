module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cores', {
        id_cores: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: DataTypes.STRING,
        cor_hex: DataTypes.STRING,
        },
        
        {
            tableName: 'cores',
            timestamps:false
        }

        
    )
    return Cadastro
}