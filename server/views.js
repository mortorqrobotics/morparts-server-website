"use strict";

module.exports = function(imports) {

    let express = imports.modules.express;
    let Promise = imports.modules.Promise;
    let util = imports.util;
    let webDir = imports.webDir;
    let handler = util.handler;

    let router = express.Router();

    let pages = {
        "": "Home",
        "inventory": "Inventory",
        "dashboard": "Dashboard",
    }

    let renderPage = Promise.coroutine(function*(res, page, user, options) {
        // if (user) {
        //     user.team = yield Team.findOne({
        //         _id: user.team,
        //     });
        // }
        res.render(webDir + "/src/page.html.ejs", {
            options: options || {},
            userInfo: user,
            page: page,
        });
    });

    for (let page in pages) {
        router.get("/" + page, handler(function*(req, res) {
            renderPage(res, pages[page], req.user);
        }));
    }

    router.get("/projects/id/:projectId", handler(function*(req, res) {
        renderPage(res, "Project", req.user, {
            projectId: req.params.projectId,
        });
    }));

    // load user profile picture from AWS S3
    router.get("/pp/:path", handler(function*(req, res) {
        // TODO: use NODE_ENV everywhere instead of this
        let isProduction = require("fs").existsSync(require("path").join(__dirname, "../morteam-server-website/server/aws-config.json"));
        if (isProduction) {
            res.redirect(profpicDir + req.params.path);
        } else {
            res.sendFile(require("path").join(
                __dirname,
                "../../morteam-server-website/buckets/profilepics.morteam.com",
                req.params.path
            ));
        }
    }));

    router.use("/js", express.static(webDir + "/build"));

    return router;

};
