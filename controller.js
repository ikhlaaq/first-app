var app = angular.module('firstApp');

app.controller('FirstCtrl', ['$scope', function ($scope) {
    $scope.name = "Ikhlaq";
    $scope.fruits = ['Apples', 'Pear', 'Kiwis'];
    
}]);
