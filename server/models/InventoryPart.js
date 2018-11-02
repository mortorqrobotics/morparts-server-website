"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;
    let ObjectId = Schema.Types.ObjectId;

    let inventoryPartSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            default: 0,
        },
        minQuantity: {
            type: Number,
            default: 0,
        },
        inventory: {
            type: ObjectId,
            ref: "Inventory",
            required: true,
        },
        purchaseLink: {
            type: String,
        },
        barcode: {
            type: String,
            default: "",
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