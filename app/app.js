angular
   .module('travelGuides', ['ngRoute'])
   .config( function($routeProvider) {
      console.log('config')
      $routeProvider
         .when('/', {
            controller: 'bookCtrl',
            templateUrl: "/app/partials/books.html"
         })
         .otherwise('/')
   })
   .controller('bookCtrl', function($http, $scope, guideFactory) {
      console.log('this is the bookCtrl')
      guideFactory
         .getBooks()
         .then((guides) => {
            $scope.books = guides
         })
   })
   .factory('guideFactory', function($http) {
      return {
         getBooks () {
            return $http
               .get('/data/guides.json')
               .then ( (response) => {
                  console.log(response.data.guides)
                  return response.data.guides
               })
         }
      }
   })
