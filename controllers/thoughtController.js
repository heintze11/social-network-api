const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThought(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // create new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
    },
    // get thought by ID
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // edit thought by ID
    editThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete thought by ID
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : Response.deleteMany({ _id: { $in: thought.response } })
            )
            .then(() => res.json({ message: 'Thought and Responses deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // addThoughtResponse
    addThoughtResponse(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true },
        ).then((reaction) =>
            !reaction
                ? res.status(404).json({ message: 'No thought with this id!' })
                : res.json(reaction)
        )
            .catch((err) => res.status(500).json(err));
    },

    // removeThoughtResponse
    removeThoughtResponse(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {_id: req.params.reactionId } } },
            { runValidators: true, new: true },
        ).then((reaction) =>
            !reaction
                ? res.status(404).json({ message: 'No reaction with this id!' })
                : res.json(reaction)
        )
            .catch((err) => res.status(500).json(err));
    },



};