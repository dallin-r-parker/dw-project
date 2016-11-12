angular.module('dw-store')
    .directive('blkClassicHeroDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/blkClassicHero/blk-classic-hero-tmpl.html'

        }
    });
//restrict with A,E, or AE