import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'academia.db'), // Caminho para o arquivo do banco de dados SQLite
    },
    useNullAsDefault: true, // Necessário para o SQLite
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'), // Diretório para armazenar as migrações
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'), // Diretório para armazenar as sementes de dados
    },
};
