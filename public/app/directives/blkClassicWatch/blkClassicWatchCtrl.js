angular.module('dw-store').controller('blkClassicWatchCtrl', function($scope, mainService) {


    $scope.getBlkClassic = function () {
        mainService.getBlkClassic().then(function (response) {
            $scope.blkclassics = response.data
        })
    }
    $scope.getBlkClassic();

    $scope.showMeBlk = 3;




});