'use strict';

angular.module('dw-store', []);
// .config(function($stateProvider, $urlRouterProvider) {
//
//     $urlRouterProvider.otherwise('/');
//     $stateProvider
//         .state('home', {
//             templateUrl: '../views/homeView.html',
//             controller: 'homeCtrl',
//             url: 'home'
//         })


//Insert third-party dependencies into empty array brackets
//example: ng-grid, ui.router, etc...
"use strict";
'use strict';

angular.module('dw-store').controller('mainCtrl', ["$scope", "mainService", function ($scope, mainService) {

    $scope.getProducts = function () {
        mainService.getProducts().then(function (response) {
            $scope.products = response.data;
        });
    };
    $scope.getProducts();
}]);
'use strict';

angular.module('dw-store').service('mainService', ["$http", function ($http) {

    //add $q if needed

    this.getProducts = function () {
        return $http({
            url: '/api/products',
            method: 'GET'
        });
    };

    this.getClassic = function () {
        return $http({
            url: '/api/classic',
            method: 'GET'
        });
    };

    this.getBlkClassic = function () {
        return $http({
            url: '/api/blkclassic',
            method: 'GET'
        });
    };

    this.getDapClassic = function () {
        return $http({
            url: '/api/dapclassic',
            method: 'GET'
        });
    };
}]);
'use strict';

angular.module('dw-store').directive('blkClassicHeroDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/blkClassicHero/blk-classic-hero-tmpl.html'

    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').directive('bottomDescriptionDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/bottomDescription/bottom-description-tmpl.html'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('blkClassicWatchCtrl', ["$scope", "mainService", function ($scope, mainService) {

    $scope.getBlkClassic = function () {
        mainService.getBlkClassic().then(function (response) {
            $scope.blkclassics = response.data;
        });
    };
    $scope.getBlkClassic();
}]);
'use strict';

angular.module('dw-store').directive('blkClassicWatchDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/blkClassicWatch/blk-classic-watch-tmpl.html',
        controller: 'blkClassicWatchCtrl'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('classicHeroCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('dw-store').directive('classicHeroDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/classicHero/classic-hero-tmpl.html',
        controller: 'classicHeroCtrl'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('classicWatchCtrl', ["$scope", "mainService", function ($scope, mainService) {
    $scope.getClassic = function () {
        mainService.getClassic().then(function (response) {
            $scope.classics = response.data;
        });
    };
    $scope.getClassic();
}]);
'use strict';

angular.module('dw-store').directive('classicWatchDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/classicWatch/classic-watch-tmpl.html',
        controller: 'classicWatchCtrl',
        scope: {
            classics: '='
        }
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('dapHeroCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('dw-store').directive('dapHeroDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/dapHero/dap-hero-tmpl.html',
        controller: 'dapHeroCtrl'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('dapWatchCtrl', ["$scope", "mainService", function ($scope, mainService) {

    $scope.getDapClassic = function () {
        mainService.getDapClassic().then(function (response) {
            $scope.dapclassics = response.data;
        });
    };
    $scope.getDapClassic();
}]);
'use strict';

angular.module('dw-store').directive('dapWatchDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/dapWatch/dap-watch-tmpl.html',
        controller: 'dapWatchCtrl'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').directive('footerDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/footer/footer-tmpl.html'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/nav/nav-tmpl.html'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('navDirCtrl', ["$scope", function ($scope) {}]);