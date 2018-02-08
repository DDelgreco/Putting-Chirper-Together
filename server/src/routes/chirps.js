import express from "express";
import {
  getChirps,
  getMentions,
  getChirp,
  postChirp,
  deleteChirp,
  updateChirp
} from "../db";

let router = express.Router();

router.get("/", (req, res) => {
  getChirps().then(data => {
    res.send(data);
  });
});
router.get("/:id", (req, res) => {
  getChirp(req.params.id).then(data => {
    res.send(data);
  });
});
router.post("/", (req, res) => {
  postChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  updateChirp(id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  deleteChirp(id);
  res.sendStatus(200);
});

export default router;
