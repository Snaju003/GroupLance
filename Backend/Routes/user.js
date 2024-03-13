const express = require("express");
const {
  getUser,
  getJoinedGroups,
  getUserAccount,
  ownedGroup,
  myPosts,
  rateUser,
  editUSer,
} = require("../controllers/user");
const fetchUser = require("../middleware/fetchuser");

const userRouter = express.Router();

userRouter.get("/getuser/:id", fetchUser, getUser);
userRouter.get("/get-joined-groups", fetchUser, getJoinedGroups);
userRouter.get("/get-user-account", fetchUser, getUserAccount);
userRouter.get("/owned-groups", fetchUser, ownedGroup);
userRouter.get("/get-all-posts", fetchUser, myPosts);
userRouter.post("/rate-user", fetchUser, rateUser);
userRouter.put("/update-user", fetchUser, editUSer);

module.exports = userRouter;
