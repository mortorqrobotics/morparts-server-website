"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;
    let ObjectId = Schema.Types.ObjectId;

    let projectSchema = new Schema({
        prefix: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        team: {
            type: ObjectId,
            ref: "Team",
            required: true,
        },
        children: {
            highestOrderPart: {
                type: Number,
                default: 0,
            },
            highestOrderAssembly: {
                type: Number,
                default: 0,
            },
        },
        created_at: Date,
        updated_at: Date,
    });

    projectSchema.pre("save", function(next) {
        let now = Date();
        this.updated_at = now;
        if (!this.created_at) {
            this.created_at = now;
        }
        next();
    });

    let Project = mongoose.model("Project", projectSchema);

    return Project;

};
