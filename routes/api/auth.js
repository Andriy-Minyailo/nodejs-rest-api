const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const { schemas } = require("../../models/user");
const ctrl = require("../../controlles/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
module.exports = router;
