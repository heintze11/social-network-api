const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  editThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getThought).post(createThought);

// /api/users/:userId
router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').get(getSingleThought);

module.exports = router;