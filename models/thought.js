const { Schema, Types } = require('mongoose');

// schema to create though model
const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            required: true,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        // add reaction schema
        reactions: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
    }
)


module.exports = thoughtSchema;