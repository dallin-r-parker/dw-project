angular.module('dw-store')
    .directive('classicWatchDir', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/classicWatch/classic-watch-tmpl.html',
            controller: 'classicWatchCtrl',
            scope: {
                classics: '='
            }
        }
    });
//restrict with A,E, or AE