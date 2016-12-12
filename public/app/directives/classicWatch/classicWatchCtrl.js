angular.module('dw-store').controller('classicWatchCtrl', function($scope, mainService) {

    $scope.getClassic = function () {
        mainService.getClassic().then(function (response) {
            $scope.classics = response.data;
        })
    }
    $scope.getClassic();

    $scope.showNum = 3;

    $('.silver-color-selection').on('click', function (e) {
        console.log('colors');
        $('.gold-color-selection').css({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"})
    })



});
