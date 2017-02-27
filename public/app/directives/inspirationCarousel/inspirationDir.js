angular.module('dw-store')
    .directive('inspirationDir', function() {

        return {
            restrict: 'E',
            templateUrl: 'app/directives/inspirationCarousel/inspiration-tmpl.html',
            link: function (scope, element, attribute) {

                $('.responsive').slick({
                    autoplay: true,
                    infinite: true,
                    speed: 800,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    pauseOnFocus: true,
                    useTransform: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
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
        }
    });
//restrict with A,E, or AE