
const Movie = require('./movie.model');

exports.movie_create = function (req, res, next) {
    let movie = new Movie(
        {
            name: req.body.name,
            year: req.body.year,
            length: req.body.length,
            genre: req.body.genre,
            director: req.body.director
        }
    );

    movie.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(JSON.stringify({ id: movie._id }))
    })
};

exports.movie_details = function (req, res, next) {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        // not a valid ObjectId
        return next("not a valid movie id");
    }
    Movie.findById(req.params.id, function (err, movie) {
        if (err) return next(err);
        res.send(movie);
    })
};

exports.movie_update = function (req, res, next) {
    Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, movie) {
        if (err) return next(err);
        res.send(JSON.stringify({ id: movie._id }))
    });
};

exports.movie_delete = function (req, res, next) {
    Movie.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send(200);
    })
};
