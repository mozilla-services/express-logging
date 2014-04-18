/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

var express = require('express');
var logging = require('express-logging');

var app = express();

// You can use the default
app.use(logging());
// Or you can change the date format
// app.use(logging("%y-%m-%d %H:%M:%S"));

app.get('/', function (req, res) {
  res.json(200, "Hello Logging");
});

app.listen(5000, "localhost", function () {
  console.log('Server listening on http://localhost:5000');
});
