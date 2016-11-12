angular.module('dw-store').controller('mainCtrl', function($scope, mainService) {

    $scope.getProducts = function () {
        mainService.getProducts().then(function (response) {
            $scope.products = response.data
        })
    }
    $scope.getProducts();







});
