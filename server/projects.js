"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let Part = imports.models.Part;
    let Project = imports.models.Project;
    let User = imports.models.User;
    let router = express.Router();
    let util = imports.util;
    let handler = util.handler;

    router.post("/projects", handler(function*(req, res) {

        let project = yield Project.create({
            name: req.body.name,
            prefix: req.body.prefix,
            team: req.user.team,
        });

        yield Part.create({
            name: "Full Assembly",
            identifier: {
                part: "00",
                assembly: "00",
                prefix: project.prefix,
            },
            isAssembly: true,
            isRootAssembly: true,
            project: project._id,
            lastUpdatedBy: req.user,
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

        let parent = yield Part.findById(req.body.parent);

        if (!parent.isAssembly) {
            return res.status(400).end("Only assemblies can have children.");
        }

        let partNumber = "00";
        let assemblyNumber = "00";
        if (req.body.isAssembly) {
            assemblyNumber = util.toDoubleDigit(project.highestOrderAssembly + 1);
        } else {
            assemblyNumber = parent.identifier.assembly;
            partNumber = util.toDoubleDigit(parent.children.highestOrderPart + 1);
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
            lastUpdatedBy: req.user,
        });

        if (!parent.children.parts) parent.children.parts = [];
        parent.children.parts = parent.children.parts.concat(part);
        if (req.body.isAssembly) {
            project.highestOrderAssembly++;
        } else {
            parent.children.highestOrderPart++;
        }
        yield parent.save();
        yield project.save()

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
                lastUpdatedBy: req.user,
            }
        });

        res.end()
    }));

    router.delete("/parts/id/:partId", handler(function*(req, res) {

        // TODO: deleting completely messes up identifier numbering, change highestOrder nums
        let part = yield Part.findOne({
            _id: req.params.partId,
        });

        if (!part) {
            return res.status(404).end("This part does not exist");
        }

        if (part.isRootAssembly) {
            return res.status(400).end("You cannot delete the root assembly");
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

    router.post("/parts/id/:partId/name", handler(function*(req, res) {

        yield Part.findOneAndUpdate({
            _id: req.params.partId,
        }, {
            $set: {
                name: req.body.name,
                lastUpdatedBy: req.user,
            }
        });

        res.end()
    }));

    router.post("/parts/id/:partId/description", handler(function*(req, res) {

        //TODO: check for hmtl injections
        yield Part.findOneAndUpdate({
            _id: req.params.partId,
        }, {
            $set: {
                description: req.body.description,
                lastUpdatedBy: req.user,
            }
        });

        res.end();
    }));

    router.get("/parts/changes/recent", handler(function*(req, res) {
        let changes = yield Part.find({}).sort("-updated_at").limit(20).exec();
        let cCount = changes.length;
        let cs = [];
        changes.forEach((change, i, arr) => {
            User.findById(change.lastUpdatedBy).then(user => {
                let c = {
                    _id: change._id,
                    name: change.name,
                    updated_at: change.updated_at,
                    lastUpdatedBy: {
                        name: `${user.firstname} ${user.lastname}`,
                        picture: user.profpicpath,
                        profilePage: `https://www.morteam.com/profiles/id/${user._id}`
                    },
                };
                cs.push(c);
                if (-- cCount == 0){
                    res.json(cs);
                }
            }).catch(() => {
                cs.push({
                    _id: change._id,
                    name: change.name,
                    updated_at: change.updated_at,
                    lastUpdatedBy: {
                        name: "anonymous",
                        picture: "/images/user.jpg",
                        profilePage: `https://www.morteam.com/`
                    },
                });
                if (-- cCount == 0){
                    res.json(cs);
                }
            });
        });
    }));

    return router;
};
