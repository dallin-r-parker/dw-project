'use strict';

angular.module('dw-store', ['ui.router', 'slick', 'sticky']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
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
    }).state('newsletter', {
        templateUrl: '../views/newsletter/newsletterView.html',
        url: '/newsletter'
    });
}]);
'use strict';

angular.module('dw-store').controller('checkoutCtrl', ["$scope", "checkoutService", function ($scope, checkoutService) {

    $scope.cart = checkoutService.getCart();
    $scope.qty = 1;

    $scope.cartAddition = function () {
        $scope.qty++;
    };
    $scope.cartSubtraction = function () {
        if ($scope.qty >= 0) {
            return $scope.qty--;
        }
    };
}]);
'use strict';

angular.module('dw-store').controller('detailsCtrl', ["$scope", "$state", "mainService", "$stateParams", "checkoutService", function ($scope, $state, mainService, $stateParams, checkoutService) {

    mainService.getWatchById($stateParams.id).then(function (response) {
        $scope.watch = response.data[0];
    });

    $scope.addToCart = function (watch) {
        checkoutService.addToCart(watch);
    };

    $('.attribute-silver-color').on("click", function () {
        $('.attribute-gold-color').css({ "color": "#afafaf", "border": "#afafaf solid .7px" });
        // $('.attribute-gold-color').hover({"color": "#4f4f4f", "border": "#4F4F4F solid .7px"})
        $(this).css({ "color": "#4f4f4f", "border": "#4f4f4f solid .7px" });
    });

    $('.attribute-gold-color').on("click", function () {
        $('.attribute-silver-color').css({ "color": "#afafaf", "border": "#afafaf solid .7px" });
        $(this).css({ "color": "#4f4f4f", "border": "#4f4f4f solid .7px" });
    });

    // $('.attribute-silver-color').hover(function () {
    //     if()
    // })
    //
    // $('.attribute-gold-color').hover(function () {
    //     if(color === #4f4f4fx)
    // })

    // $('.attribute-gold-color').hover(function () {
    //     $('.attribute-gold-color').css({"color": "#afafaf", "border": "#afafaf solid .7px"});
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
    // console.log(self.checkoutItems);
    //
    this.addToCart = function (watch) {
        self.checkoutItems.push(watch);
        // console.log(self.checkoutItems);
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

angular.module('dw-store').service('sendGridService', ["$http", function ($http) {

    //add $q if needed

    $http({
        method: 'Post',
        url: '/v3/templates/{template_id}/versions'
    });

    var request = sg.emptyRequest();
    request.body = {
        "active": 1,
        "html_content": "<%body%>",
        "name": "example_version_name",
        "plain_content": "<%body%>",
        "subject": "<%subject%>",
        "template_id": "ddb96bbc-9b92-425e-8979-99464621b543"
    };
    request.method = 'POST';
    request.path = '/v3/templates/{template_id}/versions';
    sg.API(request, function (error, response) {
        // console.log(response.statusCode)
        // console.log(response.body)
        // console.log(response.headers)
    });
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

angular.module('dw-store').controller('blkClassicWatchCtrl', ["$scope", "mainService", function ($scope, mainService) {

    $scope.getBlkClassic = function () {
        mainService.getBlkClassic().then(function (response) {
            $scope.blkclassics = response.data;
        });
    };

    $scope.getBlkClassic();

    $scope.showMeBlk = 3;

    $(document).ready(function () {
        $('.silver-color-selection').on('click', function () {
            console.log("You just clicked the silver color");
            $('.gold-color-selection').not(this).css({ "box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa" });
            $(this).css({ "box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646" });
        });

        $('.gold-color-selection').on('click', function () {
            console.log('You just clikced the gold color');
            $('.silver-color-selection').not(this).css({ "box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa" });
            $(this).css({ "box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646" });
        });
    }); //<-- End of jQuery script
}]);
'use strict';

angular.module('dw-store').directive('blkClassicWatchDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/blkClassicWatch/blk-classic-watch-tmpl.html',
        controller: 'blkClassicWatchCtrl',
        link: function link(scope, element, attribute) {
            // $('.silver-color-selection').on('click', function () {
            //     $('.gold-color-selection').toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
            //     $(this).toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
            // })
            //
            // $('.gold-color-selection').on('click', function () {
            //     $('.silver-color-selection').toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa"});
            //     $(this).toggle({"box-shadow": "inset 0 0 0 4px #fff,0 0 0 2px #464646"})
            // })
        }
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

angular.module('dw-store').directive('checkoutItemDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/checkoutItem/checkout-item-tmpl.html',
        controller: 'checkoutCtrl'
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

    $('.silver-color-selection').on('click', function (e) {
        console.log('colors');
        $('.gold-color-selection').css({ "box-shadow": "inset 0 0 0 4px #fff,0 0 0 1px #aaa" });
    });
}]);
'use strict';

angular.module('dw-store').directive('classicWatchDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/classicWatch/classic-watch-tmpl.html',
        controller: 'classicWatchCtrl',
        scope: {
            classics: '='
        },
        link: function link(scope, element, attribute) {
            $('.silver-color-selection').on('click', function () {
                $('.gold-color-selection').toggleClass(".gold-color-selection2");
            });
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

angular.module('dw-store').controller('inspirationCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('dw-store').directive('inspirationDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/inspirationCarousel/inspiration-tmpl.html',
        link: function link(scope, element, attribute) {

            $('.responsive').slick({
                autoplay: true,
                infinite: true,
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                pauseOnFocus: true,
                useTransform: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ]
            });
        }
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').directive('navDir', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/nav/nav-tmpl.html',
        link: function link(scope, element, attribute) {

            $('.sub-nav-threedots').on('click', function () {
                $(this).toggleClass("toggle");
            });
        }
    };
});
//restrict with A,E, or AE
'use strict';

angular.module('dw-store').controller('navDirCtrl', ["$scope", "checkoutService", function ($scope, checkoutService) {
    $scope.message = 1;

    $scope.cart = checkoutService.getCart();

    // console.log(cart.qty);
    // $scope.ItemsInCart = function () {
    //     for(item in checkoutItems){
    //         if( )
    //     }
    // }

}]);
'use strict';

angular.module('dw-store').controller('orderForumCtrl', ["$scope", "checkoutService", function ($scope, checkoutService) {

    $scope.states = [{ state: 'Alabama' }, { state: 'Alaska' }, { state: 'Arizona' }, { state: 'Arkansas' }, { state: 'California' }, { state: 'Colorado' }, { state: 'Connecticut' }, { state: 'Delaware' }, { state: 'Florida' }, { state: 'Georgia' }, { state: 'Hawaii' }, { state: 'Idaho' }, { state: 'Indiana' }, { state: 'Iowa' }, { state: 'Kansas' }, { state: 'Kentucky' }, { state: 'Louisiana' }, { state: 'Maine' }, { state: 'Maryland' }, { state: 'Massachusetts' }, { state: 'Michigan' }, { state: 'Minnesota' }, { state: 'Mississippi' }, { state: 'Missouri' }, { state: 'Montana' }, { state: 'Nebraska' }, { state: 'nevada' }, { state: 'New Hampshire' }, { state: 'New Jersey' }, { state: 'New Mexico' }, { state: 'New York' }, { state: 'North Carolina' }, { state: 'North Dakota' }, { state: 'Ohio' }, { state: 'Oklahoma' }, { state: 'Oregon' }, { state: 'Pennsylvania' }, { state: 'Rhode Island' }, { state: 'South Carolina' }, { state: 'South Dakota' }, { state: 'Tennessee' }, { state: 'Texas' }, { state: 'Utah' }, { state: 'Vermont' }, { state: 'Virginia' }, { state: 'Washington' }, { state: 'West Virginia' }, { state: 'Wisconsin' }, { state: 'Wyoming' }];
    $scope.myState = $scope.states[0];

    $scope.cart = checkoutService.getCart();

    // $(':input').click(function () {
    //     $(this).css({"background": "#ffffff", "border": "#000000 solid 1px"})
    // })

}]);
'use strict';

angular.module('dw-store').directive('orderForumDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/orderForum/order-forum-tmpl.html'
    };
});
'use strict';

angular.module('dw-store').controller('summaryPricingCtrl', ["$scope", "checkoutService", function ($scope, checkoutService) {

    $scope.summary = checkoutService.getCart();
}]);
'use strict';

angular.module('dw-store').directive('summaryPricingDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/summaryPricing/summary-pricing-tmpl.html'
    };
});
//restrict with A,E, or AE