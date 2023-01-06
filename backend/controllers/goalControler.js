const asyncHandler = require("express-async-handler");

// @des  Get goals
// @route GET /api/goals
// @access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @des  set goals
// @route POST /api/goals
// @access Private

const setGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set goals" });
});

// @des  Update goals
// @route PUT /api/goals
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @des  Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
