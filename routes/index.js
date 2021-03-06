var express = require("express");
var router = express.Router();

const data = require("../data.json");

/* GET home page. */
router.get("/:id", function (req, res, next) {
  let teamMember = req.params.id;

  // filter correct object on params..
  let filteredMember = data.filter((i) => teamMember.includes(i.id));

  // filtered correct user
  let myData = filteredMember[0];

  res.render("index", { member: myData });
});

module.exports = router;
