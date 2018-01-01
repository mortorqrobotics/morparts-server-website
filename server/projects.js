"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let Part = imports.models.Part;
    let Project = imports.models.Project;
    let router = express.Router();
    let handler = imports.util.handler;

    router.post("/projects", handler(function*(req, res) {

        let project = yield Project.create({
            name: req.body.name,
            prefix: req.body.prefix,
            team: req.user.team,
        });

        res.json(project);

    }));

    router.get("/projects", handler(function*(req, res) {

        let projects = yield Project.find({
            team: req.user.team,
        });

        res.json(projects);

    }));

    router.post("/projects/id/:projectId/parts", handler(function*(req, res) {

        let project = yield Project.findOne({
            _id: req.params.projectId,
        });

        if (!project) {
            return res.status(404).end("This project does not exist");
        }

        let number = project.prefix + req.body.isAssembly ? "-A-" : "-P-";

        let part = yield Part.create({
            name: req.body.name,
            number,
            isAssembly: req.body.isAssembly,
            project: req.params.projectId
        });

        if (req.body.parent) {
            parent = yield Part.findOne({
                _id: req.body.parent,
            });

            // TODO: more detailed response
            if (!parent.isAssembly) {
                return res.status(404).end("This assembly does not exist");
            }

            part.parent = req.body.parent;
            ancestors = [];
            if (parentAssembly.ancestors) {
                ancestors = parent.ancestors;
            }
            ancestors.push(req.body.parent);
            part.ancestors = ancestors;

            yield part.save();
        }

        res.json(part);

    }));

    router.get("/projects/id/:projectId/parts", handler(function*(req, res) {

        let parts = yield Part.find({
            project: req.params.projectId,
        });

        res.json(parts);

    }));

    return router;
};
