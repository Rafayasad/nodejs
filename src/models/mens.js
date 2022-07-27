const express = require("express");
const mongoose = require("mongoose");

const mens = mongoose.Schema({
    ranking:{
        type:String
    },
    name:{
        type:String
    }
})

const mensRanking = mongoose.model('ManRanking', mens);

module.exports = mensRanking;