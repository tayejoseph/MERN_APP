const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  deleteGoals,
  updateGoals,
} = require("../controllers/goalControler");

// chained request together in of writing it individually
router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(deleteGoals).put(updateGoals);

// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
