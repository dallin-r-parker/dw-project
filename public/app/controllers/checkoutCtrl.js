angular.module('dw-store').controller('checkoutCtrl', function($scope, checkoutService) {

    $scope.cart = checkoutService.getCart();
    $scope.qty = 1;


    $scope.cartAddition = function () {
        $scope.qty++
    }
    $scope.cartSubtraction = function () {
        if($scope.qty >= 0) {
            return $scope.qty--
        }
    }

});