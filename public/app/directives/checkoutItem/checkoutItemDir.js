angular.module('dw-store')
    .directive('checkoutItemDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/checkoutItem/checkout-item-tmpl.html',
            controller:'checkoutCtrl',
            // scope: {
            //     qty: '='
            // }
        }
    });
//restrict with A,E, or AE