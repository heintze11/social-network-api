const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  editThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(editThought).delete(deleteThought);

// /api/thoughts/:thoughtId/responses
router.route('/:thoughtId/responses').post(addThoughtResponse);

// /api/thoughts/:thoughtId/responses/:responseId
router.route('/:thoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;