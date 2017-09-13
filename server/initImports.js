"use strict";

module.exports = function(imports) {
    imports.modules.express = require("express");

    module.exports.imports = imports;
    return(imports);
};
