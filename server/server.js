"use strict";

module.exports = function(imports) {
    imports = require("./initImports")(imports);

    let express = imports.modules.express;
    let app = express();

    app.set("view engine", "ejs");
    app.use(require("./views")(imports));

    let api = express.Router();
    api.use(require("./parts")(imports));
    app.use("/api", api);

    return app;
}
