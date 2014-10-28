angular.module( 'ngAmobam.home', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'app/home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Início' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope ) {
})

;

