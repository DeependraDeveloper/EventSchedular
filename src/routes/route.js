const express=require("express");
const router=express.Router();

const userController=require("../controllers/userController");
const evntController=require("../controllers/eventController");
const {authorization}=require("../middleware/mid");

// User`s Api`s
router.post("/registerUser",userController.registerUser);
router.post("/login",userController.login);

// Event`s Api`s
router.post("/addEvent",authorization,evntController.addEvent);
router.post("/inviteEvent/:id",authorization,evntController.invite);
router.get("/eventsDetails/:id",authorization,evntController.details);

module.exports=router;