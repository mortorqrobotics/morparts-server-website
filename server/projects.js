"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let Part = imports.models.Part;
    let Project = imports.models.Project;
    let router = express.Router();
    let util = imports.util;
    let handler = util.handler;

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

        let parent;
        if (req.body.parent) {
            parent = yield Part.findOne({
                _id: req.body.parent,
            });
            if (!parent.isAssembly) {
                return res.status(404).end("This assembly does not exist");
            }
        }

        let number = project.prefix;
        if (req.body.isAssembly) {
            number += "-A-" + util.toDoubleDigit(project.numAssemblies) + "00";
            project.numAssemblies++;
            yield project.save();
        } else {
            number += "-P-" + (req.body.parent
                ? /(\d{2})*$/.exec(parent.number)[1]
                    + util.toDoubleDigit(parent.childAssemblies.length + 1)
                : util.toDoubleDigit(project.spareParts.length + 1)
            );
        }

        let part = yield Part.create({
            name: req.body.name,
            number,
            isAssembly: req.body.isAssembly,
            project: req.params.projectId,
            parent: req.body.parent,
        });

        if (req.body.parent) {
            if (req.body.isAssembly) {
                parent.childAssemblies.push(part);
            } else {
                parent.childParts.push(part);
            }
            yield parent.save();
        } else if (!req.body.isAssembly) {
            project.spareParts.push(part);
            yield project.save()
        }

        res.json(part);

    }));

    router.get("/projects/id/:projectId", handler(function*(req, res) {

        let project = yield Project.findOne({
            _id: req.params.projectId,
        });

        res.json(project);

    }));

    router.get("/projects/id/:projectId/parts", handler(function*(req, res) {

        let parts = yield Part.find({
            project: req.params.projectId,
        });

        res.json(parts);

    }));

    return router;
};
