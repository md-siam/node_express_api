import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

// /user/2 => req.params { id: 2}
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
