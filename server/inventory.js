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

    router.post("/inventory", handler(function* (req, res){
        let inventory = yield Inventory.create({
            name: req.body.name,
            team: req.user.team,
        });
        res.json(inventory._id);
        res.end();
    }));

    router.get("/inventory/:id", handler(function* (req, res){
        let inventory = yield InventoryPart.find({
            inventory: req.params.id
        });
        res.json(inventory);
        res.end();
    }));

    router.post(`/inventory/:inventoryId`, handler(function* (req, res){
        let inventory = yield Inventory.findById(req.params.inventoryId);
        let part = yield InventoryPart.create({
            inventory,
            name: req.body.name,
            team: req.user.team,
            quantity: req.body.quantity,
            minQuantity: req.body.minQuantity,
            purchaseLink: req.body.purchaseLink,
            barcode: req.body.barcode,
        });
        res.json(part._id);
        res.end();
    }));

    return router;
};
