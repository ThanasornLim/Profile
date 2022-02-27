const express = require("express");
const router = express.Router();
const sendMail = require("../controllers/mail");
const log = console.log;

router.post("/mail", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if ([name, email, subject, message].includes(undefined)) {
    return res.status(400).send({ message: "Error missing value" });
  }
  await sendMail({ name, email, subject, message }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Send email error.", err: err, taskSuccess: false });
    }
    return res.status(200).send({ message: "Success", taskSuccess: true });
  });
});

router.get("/hh",(req,res)=>{
    res.send("edsd")
})

module.exports = router;
