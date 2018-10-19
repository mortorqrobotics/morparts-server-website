"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let Part = imports.models.Part;
    let Project = imports.models.Project;
    let router = express.Router();
    let util = imports.util;
    let handler = util.handler;

    router.get("/inventory", handler(function* (req, res){
        yield new Promise(function (resolve, reject){
            res.send("YES");
        });
        res.end();
    }));

    return router;
};
