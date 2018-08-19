"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;
    let ObjectID = Schema.Types.ObjectID;

    let inventorySchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        team: {
            type: ObjectID,
            ref: "Team",
            required: true,
        },
        created_at: Date,
        updated_at: Date,
    });

    inventorySchema.pre("save", function(next) {
        let now = Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }
        next();
    });

    let Inventory = mongoose.model("Inventory", inventorySchema);

    return Inventory;

}