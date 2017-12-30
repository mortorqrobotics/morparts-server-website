"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let Part = imports.models.Part;
    let router = express.Router();
    let handler = imports.util.handler;

    router.post("/parts", handler(function*(req, res) {
        let part = yield Part.create({
            path: "a",
            name: "a",
            number: "a",
        });
        res.json(part);
    }));

    return router;
};
