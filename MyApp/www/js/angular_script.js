
    var app = angular.module("myApp", []);
    
    app.controller("myCtrl", function($scope) {
      $scope.prod = produtos.pizza;
      console.log("teste");


      $scope.nav = document.querySelector('ion-nav');

      $scope.showDetail = function (sabor) {
        const prod = produtos.pizza.find(prod => prod.sabor === sabor);
        $scope.nav.push('nav-detail', { prod });
      }
    });
