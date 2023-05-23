const Sequelize = require('sequelize')
const sequelize_connect = new Sequelize(
    'biodata_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize_connect = sequelize_connect

db.biodata = require('./biodata.model')(sequelize_connect, Sequelize)

module.exports = db