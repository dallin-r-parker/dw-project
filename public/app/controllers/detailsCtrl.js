angular.module('dw-store').controller('detailsCtrl', function($scope, $state, mainService, $stateParams, checkoutService) {

        mainService.getWatchById($stateParams.id).then(function (response) {
            $scope.watch = response.data[0];

        });

    $scope.addToCart = function (watch) {
        checkoutService.addToCart(watch)
    }

   $('.attribute-silver-color').on( "click", function () {
       $('.attribute-gold-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"})
       // $('.attribute-gold-color').hover({"color": "#4f4f4f", "border": "#4F4F4F solid .7px"})
       $(this).css({"color": "#4f4f4f", "border": "#4f4f4f solid .7px"})
   })
    
    $('.attribute-gold-color').on( "click", function () {
        $('.attribute-silver-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"})
        $(this).css({"color": "#4f4f4f", "border": "#4f4f4f solid .7px"})
    })


    // $('.attribute-silver-color').hover(function () {
    //     if()
    // })
    //
    // $('.attribute-gold-color').hover(function () {
    //     if(color === #4f4f4fx)
    // })

    // $('.attribute-gold-color').hover(function () {
    //     $('.attribute-gold-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"});
    // })
});