const router = require('express').Router();
const controller = require("../controller/controller")

router.post("/scanQr" , controller.scanQr);

module.exports = router;
