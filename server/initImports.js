"use strict";

module.exports = function(imports) {
    let fs = require("fs");

    imports.modules.express = require("express");
    imports.modules.Promise = require("bluebird");

    imports.models.Part = require("./models/Part")(imports);
    imports.models.Project = require("./models/Project")(imports);

    imports.util = require("./util/index")(imports);
    imports.webDir = require("path").join(__dirname, "../website");
    imports.publicDir = imports.webDir + "/public";

    module.exports.imports = imports;
    return(imports);
};
