// Define Mongoose
const { Schema, model } = require('mongoose');

// schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true, // removes white space around string
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please use a valid email address']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        // Add virtuals to user model
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
);

// virtual to get the friend count
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});


const User = model ('user', userSchema);
module.exports = User;