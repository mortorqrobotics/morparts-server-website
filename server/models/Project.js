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
        numAssemblies: {
            type: Number,
            default: 0,
        },
        // parts that are not under an assembly
        spareParts: [{
            type: ObjectId,
            ref: "Part",
            required: false,
        }],
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
