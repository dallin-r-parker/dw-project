angular.module('dw-store')
    .directive('blkClassicWatchDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/blkClassicWatch/blk-classic-watch-tmpl.html',
            controller: 'blkClassicWatchCtrl'
        }
    });
//restrict with A,E, or AE