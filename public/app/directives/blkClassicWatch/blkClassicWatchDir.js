angular.module('dw-store')
    .directive('blkClassicWatchDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/blkClassicWatch/blk-classic-watch-tmpl.html',
            controller: 'blkClassicWatchCtrl',
            link: function (scope, element, attribute) {
                // $('.silver-color-selection').on('click', function () {
                //     $('.gold-color-selection').toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
                //     $(this).toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
                // })
                //
                // $('.gold-color-selection').on('click', function () {
                //     $('.silver-color-selection').toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
                //     $(this).toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
                // })
            }
        }
    });
//restrict with A,E, or AE