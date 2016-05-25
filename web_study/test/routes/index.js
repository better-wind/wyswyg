var express = require('express');
var http = require('http');
var router = express.Router();

var httpRequest = function (options,view,res) {
    var body='';
    var callback = function (resp) {
        resp.on('data', function (data) {
            body += data;
        });

        resp.on('end', function () {
            res.render(view, {"data":body});
        });
    };
    var r = http.request(options, callback);
    r.end();
};

router.get('/', function (req, res) {

    var options = {
        host: '10.8.82.26',
        port: '8888',
        path: '/ouer/app/guide/view'
    };
    httpRequest(options,'index', res);
});

module.exports = router;
