"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;
    let ObjectID = Schema.Types.ObjectID;

    let inventoryPartSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
        },
        inventory: {
            type: ObjectID,
            ref: "Inventory",
            required: true,
        },
        purchaseLink: {
            type: String,
        },
        created_at: Date,
        updated_at: Date,
    });

    inventoryPartSchema.pre("save", function(next) {
        let now = Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }
        next();
    });

    let InventoryPart = mongoose.model("InventoryPart", inventoryPartSchema);

    return InventoryPart;

}