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

    $scope.getClassic = function () {
        console.log('checking hit');
        mainService.getClassic().then(function (response) {
            $scope.classics = response.data;
        });
    };

    $scope.getClassic();
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
}]);
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
"use strict";
'use strict';

angular.module('dw-store').directive('classicWatchDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/classicWatch/classic-watch-tmpl.html'
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