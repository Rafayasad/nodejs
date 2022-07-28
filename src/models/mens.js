const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mens = mongoose.Schema({
    ranking: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    }
})

//for secure password by hashing bcrypt

mens.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`this is my current password=>${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`this is my hash current password=>${this.password}`);
    }
    next();
})



const mensRanking = mongoose.model('ManRanking', mens);

module.exports = mensRanking;