//var express = require("express");
//var app = express();
//const path = require("path");

//app.get("/", function (req, res) {
//  res.sendFile(path.join(__dirname, "/index.html"));
//});

//app.listen(process.env.PORT ?? 3000, function () {
//  console.log(`Listening on port ${process.env.PORT ?? 3000}...`);
//});
// Express modülünü dahil et
const express = require('express');
const path = require('path');

// Uygulama örneğini oluştur
const app = express();

// Port numarasını belirle
const port = 3000;

// Ana sayfa (start page) için route tanımla
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Uygulama dinlemeye başlasın
