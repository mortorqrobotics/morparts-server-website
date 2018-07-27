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
                return res.status(400).end("Only assemblies can have children.");
            }
        }

        let partNumber = "00";
        let assemblyNumber = "00";
        if (req.body.isAssembly) {
            assemblyNumber = util.toDoubleDigit(project.children.highestOrderAssembly);
        } else {
            if (req.body.parent) {
                assemblyNumber = parent.identifier.assembly;
                partNumber = util.toDoubleDigit(parent.children.highestOrderPart + 1);
            } else {
                partNumber = util.toDoubleDigit(project.children.highestOrderPart + 1);
            }
        }

        let part = yield Part.create({
            name: req.body.name,
            identifier: {
                part: partNumber,
                assembly: assemblyNumber,
                prefix: project.prefix,
            },
            isAssembly: req.body.isAssembly,
            project: req.params.projectId,
            parent: req.body.parent,
        });

        if (parent) {
            if (!parent.children.parts) parent.children.parts = [];
            parent.children.parts = parent.children.parts.concat(part);
            if (!req.body.isAssembly) {
                parent.children.highestOrderPart++;
            }
            yield parent.save();
        } else {
            if (!req.body.isAssembly) {
                project.children.highestOrderPart++;
            } else {
                project.children.highestOrderAssembly++;
            }
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

    router.delete("/parts/id/:partId", handler(function*(req, res) {

        // TODO: deleting completely messes up identifier numbering
        let part = yield Part.findOne({
            _id: req.params.partId,
        });

        if (!part) {
            return res.status(404).end("This part does not exist");
        }

        if (part.isAssembly && part.children.parts.length > 0) {
            return res.status(400).end("You cannot delete an assembly with children");
        }

        if (part.parent) {
            let parent = yield Part.findOne({
                _id: part.parent,
            });
            parent.children.parts = parent.children.parts.filter(p => p.toString() !== part._id.toString());
            yield parent.save();
        }

        yield part.remove();
        res.end()

    }));

    return router;
};
