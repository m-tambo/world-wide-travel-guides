angular
   .module('travelGuides', ['ngRoute'])
   .config( function($routeProvider) {
      $routeProvider
         .when('/', {
            controller: 'bookCtrl',
            templatUrl: "/index.html"
         })
   })
   .controller('bookCtrl', function($http, $scope) {
      console.log('this is the bookCtrl')
      return {
         getBooks() {
            return $http
               .get('/data/guides.json')
               .then ( (response) => {
                  console.log(response)
                  return response
               })


         }
      }
   })
