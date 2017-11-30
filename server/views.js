"use strict";

module.exports = function(imports) {

    let express = imports.modules.express;
    let Promise = imports.modules.Promise;
    let util = imports.util;
    let handler = util.handler;

    let router = express.Router();

    let pages = {
      "": "Home",
    }

    let renderPage = Promise.coroutine(function*(res, page, user, options) {
        // if (user) {
        //     user.team = yield Team.findOne({
        //         _id: user.team,
        //     });
        // }
        res.render(imports.webDir + "/src/page.html.ejs", {
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

    return router;

};
