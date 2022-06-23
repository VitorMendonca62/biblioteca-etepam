module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "biblioteca_etepam",
    password: "biblioteca_etepam",
    database: "biblioteca_etepam",
    define: {
        timestamps: true, // Toda tabela possui os campos created_At e update_at
        underscored: true, // nome de tabelas e colunas em snake case
    }
}