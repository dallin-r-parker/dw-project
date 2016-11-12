angular.module('dw-store').service('mainService', function($http) {

    //add $q if needed

 this.getProducts = function () {
     return $http ({
         url: '/api/products',
         method: 'GET'
     })
 };

 this.getWatchById = function (id) {
   return $http ({
       url: '/api/products/' + id,
       method: 'GET'
   })
 };

 this.getClassic = function () {
     return $http({
         url: '/api/classic',
         method: 'GET'
     })
 };

 this.getBlkClassic = function () {
     return $http({
         url: '/api/blkclassic',
         method: 'GET'
     })
 };

 this.getDapClassic = function () {
     return $http({
         url:'/api/dapclassic',
         method: 'GET'
     })
 };

 this.getProductDetailsById = function (id) {
     return $http({
         url: '/api/details/' + id,
         method: 'GET'
     })
 }

});


