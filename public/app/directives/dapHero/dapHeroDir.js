angular.module('dw-store')
    .directive('dapHeroDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/dapHero/dap-hero-tmpl.html',
            controller: 'dapHeroCtrl'
        }
    });
//restrict with A,E, or AE