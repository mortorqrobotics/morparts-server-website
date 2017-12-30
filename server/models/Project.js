"use strict"

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;

    let projectSchema = new Schema({
        prefix: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
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
