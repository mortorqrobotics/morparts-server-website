"use strict"

const allStatuses = [
    "designing",
    "material",
    "ordered",
    "drawing",
    "ready",
    "manufacturing",
    "outsourced",
    "assembly",
    "done",
];

module.exports = function(imports) {

    let mongoose = imports.modules.mongoose;
    let Schema = mongoose.Schema;
    let ObjectId = Schema.Types.ObjectId;

    let partSchema = new Schema({
        identifier: {
            assembly: {
                type: String,
                required: true,
            },
            part: {
                type: String,
                required: false,
            },
            prefix: {
                type: String,
                required: true,
            },
        },

        name: {
            type: String,
            required: true,
        },
        isAssembly: Boolean,
        status: {
            type: String,
            enum: allStatuses,
            default: "designing",
        },
        parent: {
            type: ObjectId,
            ref: "Part",
            required: false,
        },
        children: {
            parts: [{
                type: ObjectId,
                ref: "Part",
                required: false,
            }],
            highestOrderPart: {
                type: Number,
                default: 0,
            },
        },
        project: {
            type: ObjectId,
            ref: "Project",
            required: true,
        },
        description: {
            type: String,
            required: false,
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
