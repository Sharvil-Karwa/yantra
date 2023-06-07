const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserProfile,
  updateProfile,
  allUsers,
  getUserDetails,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/update/profile").put(isAuthenticatedUser, updateProfile);
router.route("/users").get(allUsers);
router.route("/user/:id").get(getUserDetails);
router.route("/:id").delete(deleteUser);

module.exports = router;
