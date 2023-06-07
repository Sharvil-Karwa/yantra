const express = require("express");
const {
  newArticle,
  getArticles,
  getSingleArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.route("/articles").get(getArticles);
router.route("/article/:id").get(getSingleArticle);
router.route("/article/new").post(newArticle);

module.exports = router;
