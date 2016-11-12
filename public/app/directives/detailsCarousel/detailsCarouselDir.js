angular.module('dw-store')
    .directive('detailsCarouselDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/detailsCarousel/detailsCarousel.html',
            link: function (scope, element, attribute ) {
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
        }
    });
//restrict with A,E, or AE