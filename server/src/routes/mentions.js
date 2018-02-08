import { Router } from "express";
import { getMentions } from "../db";

let router = Router();

router.get("/:userid", (req, res) => {
  let user = req.params.userid;
  getMentions(user).then(data => {
    res.send(data);
  });
});

export default router;
