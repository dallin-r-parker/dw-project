angular.module('dw-store')
    .directive('dapWatchDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/dapWatch/dap-watch-tmpl.html',
            controller: 'dapWatchCtrl'
        }
    });
//restrict with A,E, or AE