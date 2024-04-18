const express = require ('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignUp")
const userSignInContoller = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authtoken')
const userLogout = require('../controller/userLogout')

router.post("/signup", userSignUpController)
router.post("/signin", userSignInContoller)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

module.exports = router
