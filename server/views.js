"use strict";

module.exports = function(imports) {

    let express = imports.modules.express;
    let Promise = imports.modules.Promise;

    let router = express.Router();

    let pages = {
      "": "Home",
    }

    return router;

};
