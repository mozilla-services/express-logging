===============
express-logging
===============

express-logging is a middleware for express.js that displays all req/res in the console.

It can be really useful for API development.

For instance::

    [14/Apr/18 13:37:16] "GET / HTTP/1.1" 200 219 — (2 ms)
    [14/Apr/18 13:37:16] "GET /favicon.ico HTTP/1.1" 404  — (1 ms)
    [14/Apr/18 13:37:22] "POST /register HTTP/1.1" 200 94 — (5 ms)
    [14/Apr/18 13:37:23] "GET / HTTP/1.1" 304  — (1 ms)

Great, how do I install that?
=============================

You have to install the middleware in your express application.

.. code-block:: javascript

    var express = require('express');
    var logging = require('express-logging');

    var app = express();
    var app.use(logging);

That's all, folks!
