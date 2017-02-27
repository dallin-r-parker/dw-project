angular.module('dw-store').controller('orderForumCtrl', function($scope, checkoutService) {

    $scope.states = [
        {state: 'Alabama'},
        {state: 'Alaska'},
        {state: 'Arizona'},
        {state: 'Arkansas'},
        {state: 'California'},
        {state: 'Colorado'},
        {state: 'Connecticut'},
        {state: 'Delaware'},
        {state: 'Florida'},
        {state: 'Georgia'},
        {state: 'Hawaii'},
        {state: 'Idaho'},
        {state: 'Indiana'},
        {state: 'Iowa'},
        {state: 'Kansas'},
        {state: 'Kentucky'},
        {state: 'Louisiana'},
        {state: 'Maine'},
        {state: 'Maryland'},
        {state: 'Massachusetts'},
        {state: 'Michigan'},
        {state: 'Minnesota'},
        {state: 'Mississippi'},
        {state: 'Missouri'},
        {state: 'Montana'},
        {state: 'Nebraska'},
        {state: 'nevada'},
        {state: 'New Hampshire'},
        {state: 'New Jersey'},
        {state: 'New Mexico'},
        {state: 'New York'},
        {state: 'North Carolina'},
        {state: 'North Dakota'},
        {state: 'Ohio'},
        {state: 'Oklahoma'},
        {state: 'Oregon'},
        {state: 'Pennsylvania'},
        {state: 'Rhode Island'},
        {state: 'South Carolina'},
        {state: 'South Dakota'},
        {state: 'Tennessee'},
        {state: 'Texas'},
        {state: 'Utah'},
        {state: 'Vermont'},
        {state: 'Virginia'},
        {state: 'Washington'},
        {state: 'West Virginia'},
        {state: 'Wisconsin'},
        {state: 'Wyoming'},
    ];
    $scope.myState = $scope.states[0];

    $scope.cart = checkoutService.getCart();


    // $(':input').click(function () {
    //     $(this).css({"background": "#ffffff", "border": "#000000 solid 1px"})
    // })



});