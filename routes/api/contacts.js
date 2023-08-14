const express = require("express");
const router = express.Router();
const ctrl = require("../../controlles/contacts");
const validateBody = require("../../middlewares/validateBody");
const { addSchema, updateFavoriteSchema } = require("../../schemas/contacts");
const isValidId = require("../../middlewares/isValidId");
const validateFavoriteBody = require("../../middlewares/validateFavoriteBody");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavoriteBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
