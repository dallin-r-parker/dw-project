angular.module('dw-store').service('checkoutService', function($http) {


    this.checkoutItems = [];
    var self = this;
    // console.log(self.checkoutItems);
    //
    this.addToCart = function(watch){
        self.checkoutItems.push(watch);
        // console.log(self.checkoutItems);
    }

    this.getCart = function () {
        return self.checkoutItems;
    }



});
