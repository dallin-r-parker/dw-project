'use strict';

angular.module('dw-store', ['ui.router', 'slick']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        templateUrl: '../views/home/homeView.html',
        url: '/'
    }).state('details', {
        templateUrl: '../views/details/watchDetailsView.html',
        url: '/details/:id',
        controller: 'detailsCtrl'
    }).state('checkout', {
        templateUrl: '../views/checkout/checkoutView.html',
        url: '/checkout',
        controller: 'checkoutCtrl'
    });
}]);
'use strict';

angular.module('dw-store').controller('checkoutCtrl', ["$scope", "checkoutService", function ($scope, checkoutService) {

    $scope.cart = checkoutService.getCart();
}]);
'use strict';

angular.module('dw-store').controller('detailsCtrl', ["$scope", "$state", "mainService", "$stateParams", "checkoutService", function ($scope, $state, mainService, $stateParams, checkoutService) {

    mainService.getWatchById($stateParams.id).then(function (response) {
        $scope.watch = response.data[0];
    });

    $scope.addToCart = function (watch) {
        checkoutService.addToCart(watch);
    };

    // $('.attribute-silver-color').one( "click", function () {
    //     $('.attribute-gold-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"})
    //     $(this).css({"color": "#4f4f4f", "border": "#4f4f4f solid .7px"})
    // })
    //
    //  $('.attribute-gold-color').one( "click", function () {
    //      $('.attribute-silver-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"})
    //      $(this).css({"color": "#4f4f4f", "border": "#4f4f4f solid .7px"})
    //  })

    // $('.attribute-silver-color').hover(function () {
    //     if()
    // })

    // $('.attribute-gold-color').hover(function () {
    //     if(color === #4f4f4fx)
    // })
}]);
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

angular.module('dw-store').service('checkoutService', ["$http", function ($http) {

    this.checkoutItems = [];
    var self = this;
    console.log(self.checkoutItems);
    //
    this.addToCart = function (watch) {
        self.checkoutItems.push(watch);
        console.log(self.checkoutItems);
    };

    this.getCart = function () {
        return self.checkoutItems;
    };
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

    this.getWatchById = function (id) {
        return $http({
            url: '/api/products/' + id,
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

    this.getProductDetailsById = function (id) {
        return $http({
            url: '/api/details/' + id,
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

    $scope.showMeBlk = 3;
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

    $scope.showNum = 3;
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

    $scope.showMeDap = 3;
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

angular.module('dw-store').controller('detailsCarouselCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('dw-store').directive('detailsCarouselDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/detailsCarousel/detailsCarousel.html',
        link: function link(scope, element, attribute) {
            // $('.variable-width').slick({
            //     infinite: false,
            //     dots: false,
            //     autoplay: true,
            //     speed: 300,
            //     slidesToShow: 3,
            //     centerMode: true,
            //     variableWidth: false
            // });


            $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: true,
                infinite: false
            });
        }
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('footerCtrl', ["$scope", function ($scope) {

    $scope.countries = [{ country: 'USA', flag: '../../../assets/img/flags/usa-flag.png' }, { country: 'Japan', flag: '../../../assets/img/flags/japan-flag.png' }, { country: 'France', flag: '../../../assets/img/flags/france-flag.png' }, { country: 'Germany', flag: '../../../assets/img/flags/germany-flag.png' }, { country: 'Taiwan', flag: '../../../assets/img/flags/taiwan-flag.png' }, { country: 'Great Britain', flag: '../../../assets/img/flags/uk-flag.png' }, { country: 'Sweden', flag: '../../../assets/img/flags/sweden-flag.png' }, { country: 'Australia', flag: '../../../assets/img/flags/australia-flag.png' }, { country: 'Korea', flag: '../../../assets/img/flags/korea-flag.png' }, { country: 'Italy', flag: '../../../assets/img/flags/italy-flag.png' }, { country: 'Denmark', flag: '../../../assets/img/flags/denmark-flag.png' }];
    $scope.myCountry = $scope.countries[0];
}]);
'use strict';

angular.module('dw-store').directive('footerDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/footer/footer-tmpl.html',
        controller: 'footerCtrl'
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/nav/nav-tmpl.html',
        link: function link(scope, element, attribute) {
            // $(window).scroll(function () {
            //     var winScroll = $(this).scrollTop();
            //
            //     console.log(winScroll);
            //     if(winScroll > 113){
            //         $('.ship-promo').css({
            //             "position": "fixed",
            //             "top":"0",
            //             "left": "0"
            //         })
            //     } if(winScroll < 113){
            //         $('.ship-promo').css({
            //             "position": "relative",
            //             "top": "151px ",
            //             "left": "0px"
            //         })
            //     }
            //     if($(this).scrollTop() < 113) {
            //         $('ship-promo').css('position: fixed');
            //     }
            // })
        }
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('navDirCtrl', ["$scope", function ($scope) {}]);