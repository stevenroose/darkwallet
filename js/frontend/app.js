/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'require',
    'angular',
    'angular-route',
    'angular-animate',
    'mm.foundation',
    'ngProgress',
    'toaster',
    'frontend/controllers/index',
    'frontend/directives/index',
    'frontend/filters/index'
], function (require, angular) {
    'use strict';
    var app = angular.module('DarkWallet', [
      'ngRoute', 'mm.foundation',
      'ngProgress', 'ngAnimate', 'toaster',
      'DarkWallet.controllers',
      'DarkWallet.directives',
      'DarkWallet.filters'
    ]);
    require(['domReady!'], function (document) {
        // * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
        angular.bootstrap(document, ['DarkWallet']);
    });
    // In case we need to initialize something after the application is created.
    app.initialize = function() {
    }
    return app;
});
