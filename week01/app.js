(function() {
    'use strict';

    angular
        .module('nameCalculator', [])
        .controller('nameCalculatorCtrl', function($scope) {
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumeric = function() {
                var totalNameValue = stringToAsciiSum($scope.name);
                $scope.totalValue = totalNameValue;
            }


            function stringToAsciiSum(string) {
                var summ = 0;
                for (var i = 0; i < string.length; i++) {
                    summ += string.charCodeAt(i);
                }
                return summ;
            }

            $scope.sayHello = function() {
                return "Oh Hi! " + $scope.name;
            }
        });

}());