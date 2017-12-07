"use strict";

module.exports = function(imports) {
    imports = require("./initImports")(imports);

    let express = imports.modules.express;

    let app = express();

    app.set("view engine", "ejs");

    app.use(require("./views")(imports));

    return app;
}
