'use strict';

angular.module('groupApp')
    .controller('MainCtrl', function ($scope) {
        $scope.message = '';
    });

/*
var request = require('request');
var cheerio = require('cheerio');

request.get({url: 'http://festi.kr/festi/'},  function(err, response, body){
    bodsy = body;
    var loadbody = cheerio.load(body);
    var arr = loadbody('.row').children('.col-sm-4');
});
    */