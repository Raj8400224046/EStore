const Category = require("../models/category")
const { errorHandler } = require("../helpers/dbErrorhandler")
exports.create = (req, res) => {
    const category = new category(req.body)
    if (err) {
        return res.status(400).json({ error: errorHandler })
    }
    res.json({ data })
}

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "Category does not exist"
            });
        }
        req.category = category;
        next();
    });
};


exports.read = (req, res) => {
    return res.json(req.category);
};



exports.update = (req, res) => {
    const category = req.category
    category.name = req.body.name
    category.save((err, date) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })

}


exports.remove = (req, res) => {
    const category = req.category
    category.name = req.body.name
    category.remove((err, date) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: 'category deleted'
        })
    })

}



exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)

    })

}
