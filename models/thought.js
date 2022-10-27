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
        reactions: [reactionSchema]
    }
);

// create reaction schema
const reactionSchema = new Schema(
    {
        reactionText: {
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
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;