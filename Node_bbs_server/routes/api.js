// ES 2015 이상의 문법
// import express from "express";
// 현재 nodejs가 지원하는 문법
const express = require("express");

const router = express.Router();
// 폴더에 index.js 파일이 잇을 경우
// 폴더를 re
const { bbsDao } = require("../models");

router.get("/", (req, res) => {
  // res.send("반갑습니다");
  res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, write: "홍기동", subject: "게시판" },
    { id: 1, write: "이몽룡", subject: "게시판" },
    { id: 2, write: "성춘향", subject: "게시판" },
  ];
  bbsDao
    .findAll({ order: [["b_date_time", "DESC"]] })
    .then((bbsList) => {
      res.json(bbsList);
    })
    .catch((err) => {
      res.json(err);
    });
  // res.json(list);
});

/**
 * web browser로 부터 데이터 전달받기
 * ?변수=값 : req.query.변수
 * /:변수 : req.params.변수
 *
 */
router.post("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.body.b_writer,
      b_date_time: Date().toString(),
      b_subject: req.body.b_subject,
      b_content: req.body.b_content,
    })
    .then((result) => {
      // res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view", (req, res) => {
  const b_id = req.query.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.get("/view/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.post("/update/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .update(
      {
        b_writer: req.body.b_writer,
        b_subject: req.body.b_subject,
        b_content: req.body.b_content,
      },
      { where: { b_id: Number(b_id) } }
    )
    .then((result) => {
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .destroy({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.redirect("/api/bbsList");
    });
});

module.exports = router;
