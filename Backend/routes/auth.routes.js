/* eslint-disable no-undef */
const express = require("express");
const { login, register } = require("../controller/auth.controller");

const Authrouter = express.Router();

Authrouter.post("/register", register);
Authrouter.post("/login", login);

module.exports = Authrouter;
