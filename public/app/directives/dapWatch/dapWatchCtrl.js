angular.module('dw-store').controller('dapWatchCtrl', function($scope, mainService) {

    $scope.getDapClassic = function () {
        mainService.getDapClassic().then(function (response) {
            $scope.dapclassics = response.data
        })
    }
    $scope.getDapClassic();

    $scope.showMeDap = 3;

});