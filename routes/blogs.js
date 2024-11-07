const express = require("express");
const router = express.Router();

//import controllers
const {createPost} = require('../controllers/posts/createPost');
const {getPost} = require('../controllers/posts/getPost');
const {createComment} = require("../controllers/comment/createComment")
const {like} = require("../controllers/likes/like");
const {unlike} = require("../controllers/likes/unlike");

//mapped controllers
router.post("/posts/createPost" , createPost)
router.get("/posts/getPost" , getPost)
router.post("/createComment" , createComment)
router.post("/likes/like" , like)
router.post("/likes/unlike" , unlike)

module.exports = router;