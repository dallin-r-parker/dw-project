angular.module('dw-store').controller('footerCtrl', function($scope) {

    
    $scope.countries = [
        {country: 'USA', flag: '../../../assets/img/flags/usa-flag.png'},
        {country: 'Japan', flag: '../../../assets/img/flags/japan-flag.png'},
        {country: 'France', flag: '../../../assets/img/flags/france-flag.png'},
        {country: 'Germany', flag: '../../../assets/img/flags/germany-flag.png'},
        {country: 'Taiwan', flag: '../../../assets/img/flags/taiwan-flag.png'},
        {country: 'Great Britain', flag: '../../../assets/img/flags/uk-flag.png'},
        {country: 'Sweden', flag: '../../../assets/img/flags/sweden-flag.png'},
        {country: 'Australia', flag: '../../../assets/img/flags/australia-flag.png'},
        {country: 'Korea', flag: '../../../assets/img/flags/korea-flag.png'},
        {country: 'Italy', flag: '../../../assets/img/flags/italy-flag.png'},
        {country: 'Denmark', flag: '../../../assets/img/flags/denmark-flag.png'}
    ];
    $scope.myCountry = $scope.countries[0];
});
