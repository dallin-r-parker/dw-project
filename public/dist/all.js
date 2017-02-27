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

angular.module('dw-store').directive('checkoutItemDir', function () {

    return {
        restrict: 'E',
        templateUrl: 'app/directives/checkoutItem/checkout-item-tmpl.html',
        controller: 'checkoutCtrl'
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
"use strict";

!function () {
  "use strict";
  var module = angular.module("sticky", []);module.directive("sticky", ["$window", "$timeout", function ($window, $timeout) {
    return { restrict: "A", scope: { disabled: "=disabledSticky" }, link: function link($scope, $elem, $attrs) {
        function initSticky() {
          shouldInitialize && (scrollbarElement.on("scroll", checkIfShouldStick), windowElement.on("resize", $onResize), memorizeDimensions(), $scope.$watch(onDigest, onChange), $scope.$on("$destroy", onDestroy), shouldInitialize = !1);
        }function memorizeDimensions() {
          initialCSS = $scope.getInitialDimensions(), isStickyLayoutDeferred && ($elem[0].getBoundingClientRect().height || (onStickyHeighUnbind = $scope.$watch(function () {
            return $elem.height();
          }, function (newValue, oldValue) {
            newValue > 0 && (initialCSS = $scope.getInitialDimensions(), isStickyLayoutWatched || onStickyHeighUnbind());
          })));
        }function deriveScrollingViewport(stickyNode) {
          var match = findAncestorTag(scrollableNodeTagName, stickyNode);return 1 === match.length ? match[0] : $window;
        }function findAncestorTag(tag, context) {
          var p,
              m = [],
              n = context.parent();do {
            var node = n[0];if (1 !== node.nodeType) break;if (node.tagName.toUpperCase() === tag.toUpperCase()) return n;p = n.parent(), n = p;
          } while (0 !== p.length);return m;
        }function shouldStickWithLimit(shouldApplyWithLimit) {
          return "true" === shouldApplyWithLimit ? $window.innerHeight - ($elem[0].offsetHeight + parseInt(offset)) < 0 : !1;
        }function getClosest(scrollTop, stickyLine, stickyBottomLine) {
          var closest = "top",
              topDistance = Math.abs(scrollTop - stickyLine),
              bottomDistance = Math.abs(scrollTop - stickyBottomLine);return topDistance > bottomDistance && (closest = "bottom"), closest;
        }function unStickElement(fromDirection) {
          initialStyle && $elem.attr("style", initialStyle), isSticking = !1, initialCSS.width = $scope.getInitialDimensions().width, $body.removeClass(bodyClass), $elem.removeClass(stickyClass), $elem.addClass(unstickyClass), "top" === fromDirection ? ($elem.removeClass(bottomClass), $elem.css("z-index", 10).css("width", initialCSS.width).css("top", initialCSS.top).css("position", initialCSS.position).css("left", initialCSS.cssLeft).css("margin-top", initialCSS.marginTop).css("height", initialCSS.height)) : "bottom" === fromDirection && confine === !0 && ($elem.addClass(bottomClass), createPlaceholder(), $elem.css("z-index", 10).css("width", initialCSS.width).css("top", "").css("bottom", 0).css("position", "absolute").css("left", initialCSS.cssLeft).css("margin-top", initialCSS.marginTop).css("margin-bottom", initialCSS.marginBottom).css("height", initialCSS.height)), placeholder && fromDirection === anchor && placeholder.remove();
        }function stickElement(closestLine) {
          isSticking = !0, $timeout(function () {
            initialCSS.offsetWidth = $elem[0].offsetWidth;
          }, 0), $body.addClass(bodyClass), $elem.removeClass(unstickyClass), $elem.removeClass(bottomClass), $elem.addClass(stickyClass), createPlaceholder(), $elem.css("z-index", "10").css("width", $elem[0].offsetWidth + "px").css("position", "fixed").css("left", $elem.css("left").replace("px", "") + "px").css(anchor, offset + elementsOffsetFromTop(scrollbar) + "px").css("margin-top", 0), "bottom" === anchor && $elem.css("margin-bottom", 0);
        }function onResize() {
          unStickElement(anchor), checkIfShouldStick();
        }function createPlaceholder() {
          if (usePlaceholder) {
            placeholder && placeholder.remove(), placeholder = angular.element("<div>");var elementsHeight = $elem[0].offsetHeight,
                computedStyle = $elem[0].currentStyle || window.getComputedStyle($elem[0]);elementsHeight += parseInt(computedStyle.marginTop, 10), elementsHeight += parseInt(computedStyle.marginBottom, 10), elementsHeight += parseInt(computedStyle.borderTopWidth, 10), elementsHeight += parseInt(computedStyle.borderBottomWidth, 10), placeholder.css("height", $elem[0].offsetHeight + "px"), $elem.after(placeholder);
          }
        }function isBottomedOut() {
          return !!(confine && scrollbarYPos() > stickyBottomLine);
        }function elementsOffsetFromTop(element) {
          var offset = 0;return element.getBoundingClientRect && (offset = element.getBoundingClientRect().top), offset;
        }function scrollbarYPos() {
          var position;return position = "undefined" != typeof scrollbar.scrollTop ? scrollbar.scrollTop : "undefined" != typeof scrollbar.pageYOffset ? scrollbar.pageYOffset : document.documentElement.scrollTop;
        }function scrollbarHeight() {
          var height;return height = scrollbarElement[0] instanceof HTMLElement ? $window.getComputedStyle(scrollbarElement[0], null).getPropertyValue("height").replace(/px;?/, "") : $window.innerHeight, parseInt(height) || 0;
        }function mediaQueryMatches() {
          var mediaQuery = $attrs.mediaQuery || !1,
              matchMedia = $window.matchMedia;return mediaQuery && !(matchMedia("(" + mediaQuery + ")").matches || matchMedia(mediaQuery).matches);
        }function getCSS($el, prop) {
          var val,
              el = $el[0],
              computed = window.getComputedStyle(el),
              prevDisplay = computed.display;return el.style.display = "none", val = computed[prop], el.style.display = prevDisplay, val;
        }var onStickyHeighUnbind,
            originalInitialCSS,
            originalOffset,
            placeholder,
            stickyLine,
            initialCSS,
            scrollableNodeTagName = "sticky-scroll",
            initialPosition = $elem.css("position"),
            initialStyle = $elem.attr("style") || "",
            stickyBottomLine = 0,
            isSticking = !1,
            stickyClass = $attrs.stickyClass || "",
            unstickyClass = $attrs.unstickyClass || "",
            bodyClass = $attrs.bodyClass || "",
            bottomClass = $attrs.bottomClass || "",
            scrollbar = deriveScrollingViewport($elem),
            windowElement = angular.element($window),
            scrollbarElement = angular.element(scrollbar),
            $body = angular.element(document.body),
            $onResize = function $onResize() {
          $scope.$root && !$scope.$root.$$phase ? $scope.$apply(onResize) : onResize();
        },
            usePlaceholder = "false" !== $attrs.usePlaceholder,
            anchor = "bottom" === $attrs.anchor ? "bottom" : "top",
            confine = "true" === $attrs.confine,
            isStickyLayoutDeferred = void 0 !== $attrs.isStickyLayoutDeferred ? "true" === $attrs.isStickyLayoutDeferred : !1,
            isStickyLayoutWatched = void 0 !== $attrs.isStickyLayoutWatched ? "true" === $attrs.isStickyLayoutWatched : !0,
            offset = $attrs.offset ? parseInt($attrs.offset.replace(/px;?/, "")) : 0,
            shouldInitialize = !0,
            checkIfShouldStick = function checkIfShouldStick() {
          if ($scope.disabled === !0 || mediaQueryMatches()) return isSticking && unStickElement(), !1;var shouldStick,
              scrollbarPosition = scrollbarYPos();shouldStick = "top" === anchor ? confine === !0 ? scrollbarPosition > stickyLine && stickyBottomLine >= scrollbarPosition : scrollbarPosition > stickyLine : stickyLine >= scrollbarPosition;var closestLine = getClosest(scrollbarPosition, stickyLine, stickyBottomLine);!shouldStick || shouldStickWithLimit($attrs.stickLimit) || isSticking ? !shouldStick && isSticking ? unStickElement(closestLine, scrollbarPosition) : confine && !shouldStick && (originalOffset = elementsOffsetFromTop($elem[0]), unStickElement(closestLine, scrollbarPosition)) : stickElement(closestLine);
        },
            onDestroy = function onDestroy() {
          scrollbarElement.off("scroll", checkIfShouldStick), windowElement.off("resize", $onResize), $onResize = null, $body.removeClass(bodyClass), placeholder && placeholder.remove();
        },
            onDigest = function onDigest() {
          if ($scope.disabled === !0) return unStickElement();var offsetFromTop = elementsOffsetFromTop($elem[0]);return 0 === offsetFromTop ? offsetFromTop : "top" === anchor ? (originalOffset || offsetFromTop) - elementsOffsetFromTop(scrollbar) + scrollbarYPos() : offsetFromTop - scrollbarHeight() + $elem[0].offsetHeight + scrollbarYPos();
        },
            onChange = function onChange(newVal, oldVal) {
          var elemIsShowed = !!newVal,
              elemWasHidden = !oldVal,
              valChange = newVal !== oldVal || "undefined" == typeof stickyLine,
              notSticking = !isSticking && !isBottomedOut();if (valChange && notSticking && newVal > 0 && elemIsShowed) {
            stickyLine = newVal - offset, elemIsShowed && elemWasHidden && $scope.updateStickyContentUpdateDimensions($elem[0].offsetWidth, $elem[0].offsetHeight), confine && $elem.parent().css({ position: "relative" });var parent = $elem.parent()[0],
                parentHeight = parseInt(parent.offsetHeight) - (usePlaceholder ? 0 : $elem[0].offsetHeight),
                marginBottom = parseInt($elem.css("margin-bottom").replace(/px;?/, "")) || 0,
                elementsDistanceFromTop = elementsOffsetFromTop($elem[0]),
                parentsDistanceFromTop = elementsOffsetFromTop(parent),
                scrollbarDistanceFromTop = elementsOffsetFromTop(scrollbar),
                elementsDistanceFromScrollbarStart = elementsDistanceFromTop - scrollbarDistanceFromTop,
                elementsDistanceFromBottom = parentsDistanceFromTop + parentHeight - elementsDistanceFromTop;stickyBottomLine = elementsDistanceFromScrollbarStart + elementsDistanceFromBottom - $elem[0].offsetHeight - marginBottom - offset + +scrollbarYPos(), checkIfShouldStick();
          }
        };$scope.getElement = function () {
          return $elem;
        }, $scope.getScrollbar = function () {
          return scrollbar;
        }, $scope.getInitialCSS = function () {
          return initialCSS;
        }, $scope.getAnchor = function () {
          return anchor;
        }, $scope.isSticking = function () {
          return isSticking;
        }, $scope.getOriginalInitialCSS = function () {
          return originalInitialCSS;
        }, $scope.processUnStickElement = function (anchor) {
          unStickElement(anchor);
        }, $scope.processCheckIfShouldStick = function () {
          checkIfShouldStick();
        }, $scope.getInitialDimensions = function () {
          return { zIndex: $elem.css("z-index"), top: $elem.css("top"), position: initialPosition, marginTop: $elem.css("margin-top"), marginBottom: $elem.css("margin-bottom"), cssLeft: getCSS($elem, "left"), width: $elem[0].offsetWidth, height: $elem.css("height") };
        }, $scope.updateStickyContentUpdateDimensions = function (width, height) {
          width && height && (initSticky(), initialCSS.width = width + "px", initialCSS.height = height + "px");
        }, $timeout(function () {
          originalInitialCSS = $scope.getInitialDimensions(), initSticky();
        }, 0);
      }, controller: ["$scope", "$window", function ($scope, $window) {
        this.resetLayout = function (newWidth, newHeight) {
          function _resetScrollPosition() {
            "top" === anchor && (scrollbar === $window ? $window.scrollTo(0, 0) : scrollbar.scrollTop > 0 && (scrollbar.scrollTop = 0));
          }var scrollbar = $scope.getScrollbar(),
              initialCSS = $scope.getInitialCSS(),
              anchor = $scope.getAnchor();if ($scope.isSticking() && ($scope.processUnStickElement(anchor), $scope.processCheckIfShouldStick()), $scope.getElement().css({ width: "", height: "", position: "", top: "", zIndex: "" }), initialCSS.position = $scope.getOriginalInitialCSS().position, delete initialCSS.offsetWidth, void 0 === newWidth && void 0 === newHeight) {
            var e_bcr = $scope.getElement()[0].getBoundingClientRect();newWidth = e_bcr.width, newHeight = e_bcr.height;
          }$scope.updateStickyContentUpdateDimensions(newWidth, newHeight), _resetScrollPosition();
        }, this.getScrollbar = function () {
          return $scope.getScrollbar();
        };
      }] };
  }]), window.matchMedia = window.matchMedia || function () {
    var warning = "angular-sticky: This browser does not support matchMedia, therefore the minWidth option will not work on this browser. Polyfill matchMedia to fix this issue.";return window.console && console.warn && console.warn(warning), function () {
      return { matches: !0 };
    };
  }();
}();
'use strict';

/**
 * ngSticky - https://github.com/d-oliveros/ngSticky
 *
 * A simple, pure javascript (No jQuery required!) AngularJS directive
 * to make elements stick when scrolling down.
 *
 * Credits: https://github.com/d-oliveros/ngSticky/graphs/contributors
 */
(function () {
  'use strict';

  var module = angular.module('sticky', []);

  /**
   * Directive: sticky
   */
  module.directive('sticky', ['$window', '$timeout', function ($window, $timeout) {
    return {
      restrict: 'A', // this directive can only be used as an attribute.
      scope: {
        disabled: '=disabledSticky'
      },
      link: function linkFn($scope, $elem, $attrs) {

        // Initial scope
        var scrollableNodeTagName = 'sticky-scroll';
        var initialPosition = $elem.css('position');
        var initialStyle = $elem.attr('style') || '';
        var stickyBottomLine = 0;
        var isSticking = false;
        var onStickyHeighUnbind;
        var originalInitialCSS;
        var originalOffset;
        var placeholder;
        var stickyLine;
        var initialCSS;

        // Optional Classes
        var stickyClass = $attrs.stickyClass || '';
        var unstickyClass = $attrs.unstickyClass || '';
        var bodyClass = $attrs.bodyClass || '';
        var bottomClass = $attrs.bottomClass || '';

        // Find scrollbar
        var scrollbar = deriveScrollingViewport($elem);

        // Define elements
        var windowElement = angular.element($window);
        var scrollbarElement = angular.element(scrollbar);
        var $body = angular.element(document.body);

        // Resize callback
        var $onResize = function $onResize() {
          if ($scope.$root && !$scope.$root.$$phase) {
            $scope.$apply(onResize);
          } else {
            onResize();
          }
        };

        // Define options
        var usePlaceholder = $attrs.usePlaceholder !== 'false';
        var anchor = $attrs.anchor === 'bottom' ? 'bottom' : 'top';
        var confine = $attrs.confine === 'true';

        // flag: can react to recalculating the initial CSS dimensions later
        // as link executes prematurely. defaults to immediate checking
        var isStickyLayoutDeferred = $attrs.isStickyLayoutDeferred !== undefined ? $attrs.isStickyLayoutDeferred === 'true' : false;

        // flag: is sticky content constantly observed for changes.
        // Should be true if content uses ngBind to show text
        // that may vary in size over time
        var isStickyLayoutWatched = $attrs.isStickyLayoutWatched !== undefined ? $attrs.isStickyLayoutWatched === 'true' : true;

        var offset = $attrs.offset ? parseInt($attrs.offset.replace(/px;?/, '')) : 0;

        /**
         * Trigger to initialize the sticky
         * Because of the `timeout()` method for the call of
         * @type {Boolean}
         */
        var shouldInitialize = true;

        /**
         * Initialize Sticky
         */
        function initSticky() {

          if (shouldInitialize) {

            // Listeners
            scrollbarElement.on('scroll', checkIfShouldStick);
            windowElement.on('resize', $onResize);

            memorizeDimensions(); // remember sticky's layout dimensions

            // Setup watcher on digest and change
            $scope.$watch(onDigest, onChange);

            // Clean up
            $scope.$on('$destroy', onDestroy);
            shouldInitialize = false;
          }
        };

        /**
         * need to recall sticky's DOM attributes (make sure layout has occured)
         */
        function memorizeDimensions() {
          // immediate assignment, but there is the potential for wrong values if content not ready
          initialCSS = $scope.getInitialDimensions();

          // option to calculate the dimensions when layout is 'ready'
          if (isStickyLayoutDeferred) {

            // logic: when this directive link() runs before the content has had a chance to layout on browser, height could be 0
            if (!$elem[0].getBoundingClientRect().height) {

              onStickyHeighUnbind = $scope.$watch(function () {
                return $elem.height();
              },

              // state change: sticky content's height set
              function onStickyContentLayoutInitialHeightSet(newValue, oldValue) {
                if (newValue > 0) {
                  // now can memorize
                  initialCSS = $scope.getInitialDimensions();

                  if (!isStickyLayoutWatched) {
                    // preference was to do just a one-time async watch on the sticky's content; now stop watching
                    onStickyHeighUnbind();
                  }
                }
              });
            }
          }
        }

        /**
         * Determine if the element should be sticking or not.
         */
        var checkIfShouldStick = function checkIfShouldStick() {
          if ($scope.disabled === true || mediaQueryMatches()) {
            if (isSticking) unStickElement();
            return false;
          }

          // What's the document client top for?
          var scrollbarPosition = scrollbarYPos();
          var shouldStick;

          if (anchor === 'top') {
            if (confine === true) {
              shouldStick = scrollbarPosition > stickyLine && scrollbarPosition <= stickyBottomLine;
            } else {
              shouldStick = scrollbarPosition > stickyLine;
            }
          } else {
            shouldStick = scrollbarPosition <= stickyLine;
          }

          // Switch the sticky mode if the element crosses the sticky line
          // $attrs.stickLimit - when it's equal to true it enables the user
          // to turn off the sticky function when the elem height is
          // bigger then the viewport
          var closestLine = getClosest(scrollbarPosition, stickyLine, stickyBottomLine);

          if (shouldStick && !shouldStickWithLimit($attrs.stickLimit) && !isSticking) {
            stickElement(closestLine);
          } else if (!shouldStick && isSticking) {
            unStickElement(closestLine, scrollbarPosition);
          } else if (confine && !shouldStick) {
            // If we are confined to the parent, refresh, and past the stickyBottomLine
            // We should 'remember' the original offset and unstick the element which places it at the stickyBottomLine
            originalOffset = elementsOffsetFromTop($elem[0]);
            unStickElement(closestLine, scrollbarPosition);
          }
        };

        /**
         * determine the respective node that handles scrolling, defaulting to browser window
         */
        function deriveScrollingViewport(stickyNode) {
          // derive relevant scrolling by ascending the DOM tree
          var match = findAncestorTag(scrollableNodeTagName, stickyNode);
          return match.length === 1 ? match[0] : $window;
        }

        /**
         * since jqLite lacks closest(), this is a pseudo emulator (by tag name)
         */
        function findAncestorTag(tag, context) {
          var m = []; // nodelist container
          var n = context.parent(); // starting point
          var p;

          do {
            var node = n[0]; // break out of jqLite
            // limit DOM territory
            if (node.nodeType !== 1) {
              break;
            }

            // success
            if (node.tagName.toUpperCase() === tag.toUpperCase()) {
              return n;
            }

            p = n.parent();
            n = p; // set to parent
          } while (p.length !== 0);

          return m; // empty set
        }

        /**
         * Seems to be undocumented functionality
         */
        function shouldStickWithLimit(shouldApplyWithLimit) {
          return shouldApplyWithLimit === 'true' ? $window.innerHeight - ($elem[0].offsetHeight + parseInt(offset)) < 0 : false;
        }

        /**
         * Finds the closest value from a set of numbers in an array.
         */
        function getClosest(scrollTop, stickyLine, stickyBottomLine) {
          var closest = 'top';
          var topDistance = Math.abs(scrollTop - stickyLine);
          var bottomDistance = Math.abs(scrollTop - stickyBottomLine);

          if (topDistance > bottomDistance) {
            closest = 'bottom';
          }

          return closest;
        }

        /**
         * Unsticks the element
         */
        function unStickElement(fromDirection) {
          if (initialStyle) {
            $elem.attr('style', initialStyle);
          }
          isSticking = false;

          initialCSS.width = $scope.getInitialDimensions().width;

          $body.removeClass(bodyClass);
          $elem.removeClass(stickyClass);
          $elem.addClass(unstickyClass);

          if (fromDirection === 'top') {
            $elem.removeClass(bottomClass);

            $elem.css('z-index', 10).css('width', initialCSS.width).css('top', initialCSS.top).css('position', initialCSS.position).css('left', initialCSS.cssLeft).css('margin-top', initialCSS.marginTop).css('height', initialCSS.height);
          } else if (fromDirection === 'bottom' && confine === true) {
            $elem.addClass(bottomClass);

            // It's possible to page down page and skip the 'stickElement'.
            // In that case we should create a placeholder so the offsets don't get off.
            createPlaceholder();

            $elem.css('z-index', 10).css('width', initialCSS.width).css('top', '').css('bottom', 0).css('position', 'absolute').css('left', initialCSS.cssLeft).css('margin-top', initialCSS.marginTop).css('margin-bottom', initialCSS.marginBottom).css('height', initialCSS.height);
          }

          if (placeholder && fromDirection === anchor) {
            placeholder.remove();
          }
        }

        /**
         * Sticks the element
         */
        function stickElement(closestLine) {
          // Set sticky state
          isSticking = true;
          $timeout(function () {
            initialCSS.offsetWidth = $elem[0].offsetWidth;
          }, 0);
          $body.addClass(bodyClass);
          $elem.removeClass(unstickyClass);
          $elem.removeClass(bottomClass);
          $elem.addClass(stickyClass);

          createPlaceholder();

          $elem.css('z-index', '10').css('width', $elem[0].offsetWidth + 'px').css('position', 'fixed').css('left', $elem.css('left').replace('px', '') + 'px').css(anchor, offset + elementsOffsetFromTop(scrollbar) + 'px').css('margin-top', 0);

          if (anchor === 'bottom') {
            $elem.css('margin-bottom', 0);
          }
        }

        /**
         * Clean up directive
         */
        var onDestroy = function onDestroy() {
          scrollbarElement.off('scroll', checkIfShouldStick);
          windowElement.off('resize', $onResize);

          $onResize = null;

          $body.removeClass(bodyClass);

          if (placeholder) {
            placeholder.remove();
          }
        };

        /**
         * Updates on resize.
         */
        function onResize() {
          unStickElement(anchor);
          checkIfShouldStick();
        }

        /**
         * Triggered on load / digest cycle
         * return `0` if the DOM element is hidden
         */
        var onDigest = function onDigest() {
          if ($scope.disabled === true) {
            return unStickElement();
          }
          var offsetFromTop = elementsOffsetFromTop($elem[0]);
          if (offsetFromTop === 0) {
            return offsetFromTop;
          }
          if (anchor === 'top') {
            return (originalOffset || offsetFromTop) - elementsOffsetFromTop(scrollbar) + scrollbarYPos();
          } else {
            return offsetFromTop - scrollbarHeight() + $elem[0].offsetHeight + scrollbarYPos();
          }
        };

        /**
         * Triggered on change
         */
        var onChange = function onChange(newVal, oldVal) {

          /**
           * Indicate if the DOM element is showed, or not
           * @type {boolean}
           */
          var elemIsShowed = !!newVal;

          /**
           * Indicate if the DOM element was showed, or not
           * @type {boolean}
           */
          var elemWasHidden = !oldVal;
          var valChange = newVal !== oldVal || typeof stickyLine === 'undefined';
          var notSticking = !isSticking && !isBottomedOut();

          if (valChange && notSticking && newVal > 0 && elemIsShowed) {
            stickyLine = newVal - offset;
            //Update dimensions of sticky element when is showed
            if (elemIsShowed && elemWasHidden) {
              $scope.updateStickyContentUpdateDimensions($elem[0].offsetWidth, $elem[0].offsetHeight);
            }
            // IF the sticky is confined, we want to make sure the parent is relatively positioned,
            // otherwise it won't bottom out properly
            if (confine) {
              $elem.parent().css({
                'position': 'relative'
              });
            }

            // Get Parent height, so we know when to bottom out for confined stickies
            var parent = $elem.parent()[0];

            // Offset parent height by the elements height, if we're not using a placeholder
            var parentHeight = parseInt(parent.offsetHeight) - (usePlaceholder ? 0 : $elem[0].offsetHeight);

            // and now lets ensure we adhere to the bottom margins
            // TODO: make this an attribute? Maybe like ignore-margin?
            var marginBottom = parseInt($elem.css('margin-bottom').replace(/px;?/, '')) || 0;

            // specify the bottom out line for the sticky to unstick
            var elementsDistanceFromTop = elementsOffsetFromTop($elem[0]);
            var parentsDistanceFromTop = elementsOffsetFromTop(parent);
            var scrollbarDistanceFromTop = elementsOffsetFromTop(scrollbar);

            var elementsDistanceFromScrollbarStart = elementsDistanceFromTop - scrollbarDistanceFromTop;
            var elementsDistanceFromBottom = parentsDistanceFromTop + parentHeight - elementsDistanceFromTop;

            stickyBottomLine = elementsDistanceFromScrollbarStart + elementsDistanceFromBottom - $elem[0].offsetHeight - marginBottom - offset + +scrollbarYPos();

            checkIfShouldStick();
          }
        };

        /**
         * Helper Functions
         */

        /**
         * Create a placeholder
         */
        function createPlaceholder() {
          if (usePlaceholder) {
            // Remove the previous placeholder
            if (placeholder) {
              placeholder.remove();
            }

            placeholder = angular.element('<div>');
            var elementsHeight = $elem[0].offsetHeight;
            var computedStyle = $elem[0].currentStyle || window.getComputedStyle($elem[0]);
            elementsHeight += parseInt(computedStyle.marginTop, 10);
            elementsHeight += parseInt(computedStyle.marginBottom, 10);
            elementsHeight += parseInt(computedStyle.borderTopWidth, 10);
            elementsHeight += parseInt(computedStyle.borderBottomWidth, 10);
            placeholder.css('height', $elem[0].offsetHeight + 'px');

            $elem.after(placeholder);
          }
        }

        /**
         * Are we bottomed out of the parent element?
         */
        function isBottomedOut() {
          if (confine && scrollbarYPos() > stickyBottomLine) {
            return true;
          }

          return false;
        }

        /**
         * Fetch top offset of element
         */
        function elementsOffsetFromTop(element) {
          var offset = 0;

          if (element.getBoundingClientRect) {
            offset = element.getBoundingClientRect().top;
          }

          return offset;
        }

        /**
         * Retrieves top scroll distance
         */
        function scrollbarYPos() {
          var position;

          if (typeof scrollbar.scrollTop !== 'undefined') {
            position = scrollbar.scrollTop;
          } else if (typeof scrollbar.pageYOffset !== 'undefined') {
            position = scrollbar.pageYOffset;
          } else {
            position = document.documentElement.scrollTop;
          }

          return position;
        }

        /**
         * Determine scrollbar's height
         */
        function scrollbarHeight() {
          var height;

          if (scrollbarElement[0] instanceof HTMLElement) {
            // isn't bounding client rect cleaner than insane regex mess?
            height = $window.getComputedStyle(scrollbarElement[0], null).getPropertyValue('height').replace(/px;?/, '');
          } else {
            height = $window.innerHeight;
          }

          return parseInt(height) || 0;
        }

        /**
         * Checks if the media matches
         */
        function mediaQueryMatches() {
          var mediaQuery = $attrs.mediaQuery || false;
          var matchMedia = $window.matchMedia;

          return mediaQuery && !(matchMedia('(' + mediaQuery + ')').matches || matchMedia(mediaQuery).matches);
        }

        /**
         * Get more accurate CSS values
         */
        function getCSS($el, prop) {
          var el = $el[0],
              computed = window.getComputedStyle(el),
              prevDisplay = computed.display,
              val;

          // hide the element so that we can get original css
          // values instead of computed values
          el.style.display = "none";

          // NOTE - computed style declaration object is a reference
          // to the element's CSSStyleDeclaration, so it will always
          // reflect the current style of the element
          val = computed[prop];

          // restore previous display value
          el.style.display = prevDisplay;

          return val;
        }

        // public accessors for the controller to hitch into. Helps with external API access
        $scope.getElement = function () {
          return $elem;
        };
        $scope.getScrollbar = function () {
          return scrollbar;
        };
        $scope.getInitialCSS = function () {
          return initialCSS;
        };
        $scope.getAnchor = function () {
          return anchor;
        };
        $scope.isSticking = function () {
          return isSticking;
        };
        $scope.getOriginalInitialCSS = function () {
          return originalInitialCSS;
        };
        // pass through aliases
        $scope.processUnStickElement = function (anchor) {
          unStickElement(anchor);
        };
        $scope.processCheckIfShouldStick = function () {
          checkIfShouldStick();
        };

        /**
         * set the dimensions for the defaults of the content block occupied by the sticky element
         */
        $scope.getInitialDimensions = function () {
          return {
            zIndex: $elem.css('z-index'),
            top: $elem.css('top'),
            position: initialPosition, // revert to true initial state
            marginTop: $elem.css('margin-top'),
            marginBottom: $elem.css('margin-bottom'),
            cssLeft: getCSS($elem, 'left'),
            width: $elem[0].offsetWidth,
            height: $elem.css('height')
          };
        };

        /**
         * only change content box dimensions
         */
        $scope.updateStickyContentUpdateDimensions = function (width, height) {
          if (width && height) {
            initSticky();
            initialCSS.width = width + 'px';
            initialCSS.height = height + 'px';
          }
        };

        // ----------- configuration -----------

        $timeout(function () {
          originalInitialCSS = $scope.getInitialDimensions(); // preserve a copy
          // Init the directive
          initSticky();
        }, 0);
      },

      /**
       * +++++++++ public APIs+++++++++++++
       */
      controller: ['$scope', '$window', function ($scope, $window) {

        /**
         * integration method allows for an outside client to reset the pinned state back to unpinned.
         * Useful for when refreshing the scrollable DIV content completely
         * if newWidth and newHeight integer values are not supplied then function will make a best guess
         */
        this.resetLayout = function (newWidth, newHeight) {

          var scrollbar = $scope.getScrollbar(),
              initialCSS = $scope.getInitialCSS(),
              anchor = $scope.getAnchor();

          function _resetScrollPosition() {

            // reset means content is scrolled to anchor position
            if (anchor === 'top') {
              // window based scroller
              if (scrollbar === $window) {
                $window.scrollTo(0, 0);
                // DIV based sticky scroller
              } else {
                if (scrollbar.scrollTop > 0) {
                  scrollbar.scrollTop = 0;
                }
              }
            }
            // todo: need bottom use case
          }

          // only if pinned, force unpinning, otherwise height is inadvertently reset to 0
          if ($scope.isSticking()) {
            $scope.processUnStickElement(anchor);
            $scope.processCheckIfShouldStick();
          }
          // remove layout-affecting attribures that were modified by this sticky
          $scope.getElement().css({ 'width': '', 'height': '', 'position': '', 'top': '', zIndex: '' });
          // model resets
          initialCSS.position = $scope.getOriginalInitialCSS().position; // revert to original state
          delete initialCSS.offsetWidth; // stickElement affected

          // use this directive element's as default, if no measurements passed in
          if (newWidth === undefined && newHeight === undefined) {
            var e_bcr = $scope.getElement()[0].getBoundingClientRect();
            newWidth = e_bcr.width;
            newHeight = e_bcr.height;
          }

          // update model with new dimensions (if supplied from client's own measurement)
          $scope.updateStickyContentUpdateDimensions(newWidth, newHeight); // update layout dimensions only

          _resetScrollPosition();
        };

        /**
         * return a reference to the scrolling element (window or DIV with overflow)
         */
        this.getScrollbar = function () {
          return $scope.getScrollbar();
        };
      }]
    };
  }]);

  // Shiv: matchMedia
  window.matchMedia = window.matchMedia || function () {
    var warning = 'angular-sticky: This browser does not support ' + 'matchMedia, therefore the minWidth option will not work on ' + 'this browser. Polyfill matchMedia to fix this issue.';

    if (window.console && console.warn) {
      console.warn(warning);
    }

    return function () {
      return {
        matches: true
      };
    };
  }();
})();
'use strict';

angular.module('app', ['sticky', 'appService'])

// main flow starts
.controller('homeCtrl', ["citiesResponse", "citiesLibrary", "city", "$filter", "$q", function (citiesResponse, citiesLibrary, city, $filter, $q) {
    this.cities = citiesResponse.data.items;
    this.city = city; // scoped
    this.isInitialized = false; // UI not fully ready
    //console.log("populated cities", this.cities);

    var randomCityResponse = this.cities[parseInt(Math.random() * this.cities.length)];
    // after picking a city, assign the members
    city.id = randomCityResponse.woeid; // special where on earth id convention
    city.links = randomCityResponse.links; // external page links to city
    city.name = randomCityResponse.name;

    // -- state variables
    this.changeCityCount = 0; // how many times has change city been clicked


    // ((slower)) setup other relevant metadata by pulling from the web
    this.initializing = function () {
        // async
        var p = $q.defer();
        // a subtask
        citiesLibrary.initializingCity(city).then(function () {
            this.isInitialized = true;
            p.resolve();
        }.bind(this));
        return p;
    };

    this.getWeatherImageSrc = function () {

        // weather is async
        if (this.city.data && this.city.data.weather) {

            return ["http://l.yimg.com/a/i/us/we/52/", this.city.data.weather.code, ".gif"].join("");
        }
    };

    // temp in Celsius
    this.getWeatherTemperatureCelsius = function () {

        // weather is async
        if (this.city.data && this.city.data.weather) {

            return (this.city.data.weather.temp - 32) / 1.8 | 0;
        }
    };

    // ~~~~~~~~~ user interaction ~~~~~~~~~~

    /**
     * from the actions toolbar, reset state event
     * Change to a new city altogether.
     */
    this.onChangeCity = function () {
        this.isInitialized = false; // UI not fully ready

        var randomCityResponse = this.cities[parseInt(Math.random() * this.cities.length)];
        // reusing city object
        city.id = randomCityResponse.woeid; // special where on earth id convention
        city.links = randomCityResponse.links; // external page links to city
        city.name = randomCityResponse.name;

        // RE-initializing flow
        this.initializing().promise.then(function (promises) {
            // post init processing
            this.changeCityCount++;
            console.log("new city dependencies all loaded for", city);

            // to make it interesting lets insert random text in the sticky to test its ability to resize
            var expressionsList = ["A great city for travelling", "Wonderful cultural cuisines", "Nature and wildlife", "People and artworks", "Celebrate in top teams in sports and activities", "Historic and ancient momuments"];

            this.contentAfterChangeCity = expressionsList[parseInt(Math.random() * expressionsList.length)];
        }.bind(this));
    };

    // ____________ initialize ______________

    this.initializing().promise.then(function (promises) {
        // post init processing

    }.bind(this));
}]).filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
'use strict';

angular.module('appService', ['ngRoute'])

// data struct?
.service('city', [function () {

    this.woeid;
    this.name;
    this.links;
    this.data = {
        weather: null,
        image: null
    };
}]).factory('citiesLibrary', ['$http', '$q', '$filter', function ($http, $q, $filter) {

    var flickrApiKey = "fa214b1215cd1a537018cfbdfa7fb9a6"; // demo key, you ought to use your *own*

    return {

        fetchingConfiguration: function fetchingConfiguration() {
            // yields a promise
            return $http.get('data/cities.json');
        },

        fetchingCityById: function fetchingCityById(woeid) {

            return $http.get("http://query.yahooapis.com/v1/public/yql", {
                params: {
                    q: "select item.condition from weather.forecast where woeid = " + woeid,
                    format: "json",
                    env: "store://datatables.org/alltableswithkeys"
                    //, rnd: parseInt (Math.random() * 100000)
                }
            });
        },

        fetchingFlickrPhotoMatchesByTag: function fetchingFlickrPhotoMatchesByTag(tag) {

            // narrow down on the kind of photo that works well for demoing
            var photoAssetType = "people";

            var p = $http.get("https://api.flickr.com/services/rest/", {
                params: {
                    api_key: flickrApiKey,
                    method: 'flickr.photos.search',
                    format: 'json',
                    nojsoncallback: 1,
                    tags: tag + " " + photoAssetType,
                    per_page: 5 // keep it light
                }
            });

            //     .success(function(data) { });


            return p;
        },

        // grab some photo by luck, provided a previous response ( of potential matches )
        fetchingFlickrRandomPhotoReferenceByResponse: function fetchingFlickrRandomPhotoReferenceByResponse(responseData) {

            if (!responseData.photos.photo.length) {
                console.error("nothing matched or service error");
                return;
            }

            // make up your mind, pick a pic
            var photo = responseData.photos.photo[Math.floor(Math.random() * responseData.photos.photo.length)];

            return $http.get("https://api.flickr.com/services/rest/", {
                params: {
                    api_key: flickrApiKey,
                    method: 'flickr.photos.getSizes',
                    format: 'json',
                    photo_id: photo.id,
                    nojsoncallback: 1
                }
            });
        },

        // populate the city with data feeds
        initializingCity: function initializingCity(city) {

            // 1st data service - weather

            var p1 = this.fetchingCityById(city.id).success(function (data) {
                try {
                    city.data.weather = data.query.results.channel.item.condition;
                } catch (e) {
                    console.error("couldn't parse", data);
                }
            });

            // 2nd data service - photo image
            var d2 = $q.defer();

            this.fetchingFlickrPhotoMatchesByTag(city.name).success(function (data) {

                this.fetchingFlickrRandomPhotoReferenceByResponse(data).success(function (data) {

                    // guessing at least 3 image sizes as fail over
                    var preferredSizeLabelsList = ["Large Square", "Square", "Small"];

                    try {

                        preferredSizeLabelsList.every(function (dimensionType) {

                            // exact extraction of the square shaped image
                            var squareImagesFetch = $filter('filter')(data.sizes.size, { label: dimensionType }, true);
                            // got a good image that I prefer to render
                            if (squareImagesFetch && squareImagesFetch.length) {

                                // memorize good image
                                city.data.image = squareImagesFetch[0];
                                // really complete
                                d2.resolve();
                                return false;
                            }

                            // loop more
                            return true;
                        });
                    } catch (e) {
                        console.error("couldn't parse", data, e);
                    }
                }.bind(this));
            }.bind(this));

            // combined network actions
            return $q.all([p1, d2.promise]);
            // /initializingCity
        }

        // /factory def
    };
}])

// physical to logical path map
.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'home',

        resolve: {

            // DI - link the cities factory
            "citiesResponse": ["citiesLibrary", function (citiesLibrary) {
                return citiesLibrary.fetchingConfiguration();
            }]

        }
    }).otherwise({
        redirectTo: '/'
    });
}]);