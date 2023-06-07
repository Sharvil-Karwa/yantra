const Article = require("../models/articleModel");
const User = require("../models/userModel");
const catchAsyncErrors = require("../middleware/asyncErrors");
const ErrorHandler = require("../utils/errorHandler");

exports.newArticle = catchAsyncErrors(async (req, res, next) => {
  const article = await Article.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json({
    success: true,
    article,
  });
});

exports.getArticles = catchAsyncErrors(async (req, res, next) => {
  const articles = await Article.find();
  res.status(200).json({
    success: true,
    articles,
  });
});

exports.getSingleArticle = catchAsyncErrors(async (req, res, next) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    return next(
      new ErrorHandler(`Article not found with id: ${req.params.id}`)
    );
  }
  res.status(200).json({
    success: true,
    article,
  });
});
