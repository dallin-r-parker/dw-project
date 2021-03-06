angular.module('dw-store', ['ui.router', 'slick'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                templateUrl: '../views/home/homeView.html',
                url: '/'
            })
            .state('details', {
                templateUrl: '../views/details/watchDetailsView.html',
                url: '/details/:id',
                controller: 'detailsCtrl'
            })
            .state('checkout', {
                templateUrl: '../views/checkout/checkoutView.html',
                url: '/checkout',
                controller: 'checkoutCtrl'
            })
            .state('newsletter', {
                templateUrl: '../views/newsletter/newsletterView.html',
                url:'/newsletter',
            })

    });
