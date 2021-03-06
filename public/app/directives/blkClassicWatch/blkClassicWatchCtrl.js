angular.module('dw-store').controller('blkClassicWatchCtrl', function($scope, mainService) {


    $scope.getBlkClassic = function () {
        mainService.getBlkClassic().then(function (response) {
            $scope.blkclassics = response.data
        })
    }
    $scope.getBlkClassic();

    $scope.showMeBlk = 3;

    $(document).ready(function (){
        $('.silver-color-selection').on('click', function () {
            console.log("You just clicked the silver color");
            $('.gold-color-selection').not(this).css({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
            $(this).css({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
        })

        $('.gold-color-selection').on('click', function () {
          console.log('You just clikced the gold color');
            $('.silver-color-selection').not(this).css({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
            $(this).css({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
        })
    });
});
