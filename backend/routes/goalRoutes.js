const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
} = require("../controllers/goalControler");
const { protect } = require("../middleware/authMiddleware");

// chained request together in of writing it individually
router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").delete(protect, deleteGoals).put(protect, updateGoals);

// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
