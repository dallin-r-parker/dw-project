angular.module('dw-store')
    .controller('navDirCtrl', function($scope, checkoutService) {
        $scope.message = 1;

        $scope.cart = checkoutService.getCart();

        console.log(cart.qty);
        // $scope.ItemsInCart = function () {
        //     for(item in checkoutItems){
        //         if( )
        //     }
        // }


});