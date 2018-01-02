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

    router.use("/js", express.static(webDir + "/build"));

    return router;

};
