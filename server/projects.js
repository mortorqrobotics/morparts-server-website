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

        let partNumber = "00";
        let assemblyNumber = "00";
        if (req.body.isAssembly) {
            assemblyNumber = util.toDoubleDigit(project.numAssemblies);
            project.numAssemblies++;
            yield project.save();
        } else {
            if (req.body.parent) {
                assemblyNumber = parent.assemblyNumber;
                partNumber = util.toDoubleDigit(parent.childParts.length + 1);
            } else {
                partNumber = util.toDoubleDigit(project.spareParts.length + 1);
            }
        }

        let part = yield Part.create({
            name: req.body.name,
            partNumber,
            assemblyNumber,
            isAssembly: req.body.isAssembly,
            project: req.params.projectId,
            parent: req.body.parent,
        });

        if (req.body.parent) {
            if (req.body.isAssembly) {
                parent.childAssemblies = parent.childAssemblies.concat(part);
            } else {
                parent.childParts = parent.childParts.concat(part);
            }
            yield parent.save();
        } else if (!req.body.isAssembly) {
            project.spareParts = project.spareParts.concat(part);
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

    router.post("/parts/id/:partId/status", handler(function*(req, res) {

        yield Part.findOneAndUpdate({
            _id: req.params.partId,
        }, {
            $set: {
                status: req.body.status,
            }
        });

        res.end()
    }));

    return router;
};
