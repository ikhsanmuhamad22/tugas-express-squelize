module.exports = (sequelize_connect, Sequelize) => {
    const Biodata = sequelize_connect.define('biodata', {
        nama:{
            type: Sequelize.STRING,
            allowNull: false
        },
        tempat_lahir:{
            type: Sequelize.STRING,
            allowNull: false
        },
        tanggal_lahir:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        alamat:{
            type: Sequelize.TEXT,
        }
    })
    return Biodata
}

