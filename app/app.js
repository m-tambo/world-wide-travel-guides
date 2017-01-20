angular
   .module('travelGuides', [ngRoute])
   .config( function($routeprovider) {
      $routeprovider
         .when('/') {
            controller: "bookCtrl",
            templatUrl: "/index.html"
         }

   })
   .controller('bookCtrl', function($http, $scope) {

         function getBooks() {
            return $http
               .get(`data/guides.js`)
               .then ( (response) => {
                  console.log(response)

               })


         }

   })
