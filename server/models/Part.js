"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;

    let partSchema = new Schema({
        number: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        created_at: Date,
        updated_at: Date
    });

    partSchema.pre("save", function(next) {
        let now = new Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }
        next();
    });

    let Part = mongoose.model("Part", partSchema);

    return Part;

};
