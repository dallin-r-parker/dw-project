angular.module('dw-store')
    .directive('footerDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/footer/footer-tmpl.html',
            controller: 'footerCtrl'
        }
    });
//restrict with A,E, or AE