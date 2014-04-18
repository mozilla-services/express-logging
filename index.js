/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

var strftime = require('strftime');

/**
 * The logging middleware write request log on the console.
 *
 * @param {String} strftime date format. Default: "%y/%b/%d %H:%M:%S"
 *
 */
function makeLogging(dateFormat) {
  var dateFormat = dateFormat || "%y/%b/%d %H:%M:%S";

  return function logging(req, res, next){
    var start =  new Date();
    res.on('finish', function() {
      var length = res._headers['content-length'] || "";
      var stop = new Date();
      
      console.log(
        '[%s] "%s %s HTTP/%s.%s" %s %s — (%s ms)',
        strftime(dateFormat, start),
        req.method, req.url, req.httpVersionMajor, req.httpVersionMinor,
        res.statusCode, length, stop - start);
    });
    next();
  };
}

module.exports = makeLogging;
