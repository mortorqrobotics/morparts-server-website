"use strict"

module.exports = function(imports) {

    let express = imports.modules.express;
    let InventoryPart = imports.models.InventoryPart;
    let Inventory = imports.models.Inventory;
    let router = express.Router();
    let util = imports.util;
    let handler = util.handler;

    router.get("/inventory", handler(function* (req, res){
        let inventories = yield Inventory.find({
            team: req.user.team,
        });
        let invtrs={};
        inventories.map(inv => {
            invtrs[inv.id] = inv.name;
        });
        res.json(invtrs);
        res.end();
    }));

    router.post("/inventory/:name", handler(function* (req, res){
        let inventory = yield Inventory.create({
            name: req.params.name,
            team: req.user.team,
        });
        res.json(inventory._id);
        res.end();
    }))

    return router;
};
