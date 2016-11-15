angular.module('dw-store')
    .directive('classicWatchDir', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/classicWatch/classic-watch-tmpl.html',
            controller: 'classicWatchCtrl',
            scope: {
                classics: '='
            },
            link: function (scope, element, attribute) {
                $('.silver-color-selection').on('click', function () {
                    $('.gold-color-selection').toggleClass(".gold-color-selection2")
                })
            }
        }
    });
//restrict with A,E, or AE