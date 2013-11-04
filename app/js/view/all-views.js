/*jslint nomen: true*/
/*global $,define,require,angular,document */

define(function (require, exports, module) {
    'use strict';

    var notes = require('view/notes');

    function registerController(app, controller) {
        app.controller(controller.name, ['$scope', '$location', '$document', '$timeout', controller.controller]);
    }

    function configViewRouting(app) {
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/notes', {templateUrl: 'js/view/partial/notes.html', controller: notes.name})
                .otherwise({redirectTo: '/notes'});
        }]);
    }

    exports.init = function () {
        angular.element(document).ready(function () {
            var noteApp = angular.module('note', [
                'angular-gridster',
                '$strap.directives',
                'bootstrap-tagsinput',
                'angularFileUpload',
                'styling'
            ]);

            configViewRouting(noteApp);
            registerController(noteApp, notes);
            angular.bootstrap(document, ['note']);
        });
    };

});
