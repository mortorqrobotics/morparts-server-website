"use strict";

module.exports = function(imports) {
    let fs = require("fs");

    imports.modules.express = require("express");
    imports.modules.Promise = require("bluebird");


    module.exports.imports = imports;
    return(imports);
};
