angular.module('dw-store')
    .directive('classicHeroDir', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/classicHero/classic-hero-tmpl.html',
            controller: 'classicHeroCtrl'
        }
    });
//restrict with A,E, or AE