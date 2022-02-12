const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: '/api/genres'
                    },
                    data: genres
                })
            })
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                if (genre) {
                    res.json({
                        meta: {
                            status: 200,
                            total: 1,
                            url: '/api/genres/detail/:id'
                        },
                        data: genre
                    })
                } else {
                    res.status(400).json({
                        meta: {
                            status: 400,
                            total: 1,
                            url: '/api/genres/detail/:id'
                        },
                        data: "El genero solicitado no existe"
                    })
                }

            });
    }

}

module.exports = genresController;