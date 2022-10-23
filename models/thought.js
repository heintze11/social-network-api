const { Schema, Types } = require('mongoose');

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
        // how to add reaction schema??
        reactions: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
    }
)


module.exports = thoughtSchema;