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

angular.module('dw-store').controller('mainCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('dw-store').service('mainService', ["$http", function ($http) {

    //add $q if needed

    // $http({
    //   method: 'GET',
    //   url: 'schedule.json'
    // })

}]);
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