angular.module('dw-store').controller('classicWatchCtrl', function($scope, mainService) {

    $scope.getClassic = function () {
        mainService.getClassic().then(function (response) {
            $scope.classics = response.data;
        })
    }
    $scope.getClassic();

    $scope.showNum = 3;



});