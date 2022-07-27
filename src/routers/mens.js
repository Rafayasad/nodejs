const express = require('express');
const router = express.Router();
const mens = require("../../src/models/mens.js");

// we will handle post req 
router.post("/mens", async (req, res) => {
    try {
        const addMensRanking = mens(req.body);
        const result = await addMensRanking.save();
        res.status(200).send(result);
    } catch (e) {
        console.log("Error=>", e);
    }
})

// to get all data from that mens collection
router.get("/mens", async (req, res) => {
    try {
        const getMensRanking = await mens.find();
        res.send(getMensRanking);
    } catch (e) {
        console.log("err=>", e);
    }
})

// to get individual data from that mens collection
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMenRanking = await mens.findById(_id);
        res.send(getMenRanking);
    } catch (e) {
        console.log('err=>', e);
    }
})

// to update data from that mens collection
router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getUpdateMenRanking = await mens.findByIdAndUpdate(_id, req.body, { new: true });
        res.send(getUpdateMenRanking);
    } catch (e) {
        console.log('err=>', e);
    }
})

// to delete data from that mens collection
router.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteMenRanking = await mens.findByIdAndDelete(_id);
        res.send(deleteMenRanking);
    } catch (e) {
        console.log('err=>', e);
    }
})

module.exports = router;