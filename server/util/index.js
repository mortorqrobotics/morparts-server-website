"use strict";

module.exports = function(imports) {

    let config = imports.config;
    let Promise = imports.modules.Promise;
    let Part = imports.models.Part;

    let util = {};

    util.handler = function(generator) {
        let func = Promise.coroutine(generator);
        return function (req, res, next) {
            return func
                .apply(null, arguments)
                .catch(function(err) {
                    console.error(err);
                    res.status(500).end("Internal server error");
                });
        };
    };

    util.toDoubleDigit = function(num) {
        return (num < 10 ? "0" : "") + num;
    }

    util.getAllChildren = Promise.coroutine(function*(partId, children) {
        let parts = yield Part.find({
            parent: partId,
        });

        if (parts) {
            for (let part of parts) {
                children.push(part._id);
                if (part.isAssembly) {
                    children.concat(yield util.getAllChildren(part._id, children));
                }
            };
        }

        return children;
    });

    return util;
}
