const { Schema, model } = require('mongoose');

// create reaction schema - has to be first since thoughtSchema references it
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
    },
    {
        // Add virtuals to thought model
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);



thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;