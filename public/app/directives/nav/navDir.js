angular.module('dw-store')
    .directive('navDir', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/nav/nav-tmpl.html',
            link: function (scope, element, attribute) {


                $('.sub-nav-threedots').on('click', function () {
                    $(this).toggleClass("toggle");
                });


            }
        }
    });
//restrict with A,E, or AE