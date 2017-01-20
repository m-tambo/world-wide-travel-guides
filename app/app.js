angular
   .module('travelGuides', ['ngRoute'])
   .config( function($routeProvider) {
      console.log('config')
      $routeProvider
         .when('/', {
            controller: 'bookCtrl',
            templateUrl: "/app/partials/books.html"
         })
   })
   .controller('bookCtrl', function($http, $scope) {
      console.log('this is the bookCtrl')
      $http.get('/data/guides.json')
            .then ( (response) => {
               console.log(response)
               return response
            })

   })
