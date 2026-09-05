require('dotenv').config();

function requireInProduction(value, name) {
    if (process.env.NODE_ENV === 'production' && !value) {
        throw new Error(`Falta la variable de entorno obligatoria: ${name}`);
    }
    return value;
}

module.exports = {
    database: process.env.DB_NAME || 'techstore',
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: requireInProduction(process.env.DB_PASSWORD, 'DB_PASSWORD')
};
