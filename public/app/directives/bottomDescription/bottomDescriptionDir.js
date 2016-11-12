angular.module('dw-store')
    .directive('bottomDescriptionDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/bottomDescription/bottom-description-tmpl.html'
        }
    });
//restrict with A,E, or AE