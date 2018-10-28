"use strict";

module.exports = function(imports) {
    imports = require("./initImports")(imports);

    let path = require("path")
    let express = imports.modules.express;
    let app = express();

    app.use(function(req, res, next) {
        if (req.method != "GET") {
            return next();
        }

        let path = req.path;

        if (path.startsWith("/js")) {
            return next();
        }

        if (!req.user) {
            return res.redirect("http://morteam.com/login?parts");
        }

        if (!req.user.team) {
          return res.redirect("http://morteam.com/void");
        }

        next();
    });

    app.set("view engine", "ejs");
    app.use(require("./views")(imports));

    let api = express.Router();
    api.use(require("./projects")(imports));
    app.use("/api", api);

    app.use(express.static(path.join(__dirname, "..", "website", "public")))

    app.get("/images/user.jpg:size", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "website", "public", "images", "user.jpg"));
    });

    return app;
}
