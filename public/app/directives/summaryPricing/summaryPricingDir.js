angular.module('dw-store')
    .directive('summaryPricingDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/summaryPricing/summary-pricing-tmpl.html'
        }
    });
//restrict with A,E, or AE