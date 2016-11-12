angular.module('dw-store').controller('checkoutCtrl', function($scope, checkoutService) {

    $scope.cart = checkoutService.getCart();

});