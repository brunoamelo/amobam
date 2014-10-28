angular.module( 'ngAmobam.books', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'books', {
    url: '/books',
    views: {
      "main": {
        controller: 'BooksCtrl',
        templateUrl: 'app/books/books.tpl.html'
      }
    },
    data:{ pageTitle: 'Livros' }
  });
})

.controller( 'BooksCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
