"use strict";

module.exports = function(imports) {

    let express = imports.modules.express;
    let Promise = imports.modules.Promise;

    let router = express.Router();

    let pages = {
      "": "Home",
    }

    let renderPage = Promise.coroutine(function*(res, page, user, options) {
        if (user) {
            user.team = yield Team.findOne({
                _id: user.team,
            });
        }
        res.render(webDir + "/src/page.html.ejs", {
            options: options || {},
            userInfo: user,
            page: page,
        });
    });

    return router;

};
