angular.module('dw-store').controller('summaryPricingCtrl', function($scope, checkoutService) {


    $scope.summary = checkoutService.getCart()

});