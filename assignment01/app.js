(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.menu = "";
        $scope.formClass = "form-group";

        $scope.displayMessage = function() {
            var numOfDishes = CountDishes($scope.menu);
            console.log("Number of dishes: " + numOfDishes);
            if (numOfDishes < 1) {
                $scope.message = "Please enter data first";
                $scope.messageClass = "form-group message text-danger";
                $scope.formClass = "form-group has-error";
            } else {
                $scope.messageClass = "form-group message text-success";
                $scope.formClass = "form-group has-success";

                if (numOfDishes > 3)
                    $scope.message = "Too much!";
                else
                    $scope.message = "Enjoy!";
            }

        }

        function CountDishes(string) {
            if (string == "") return 0;
            var dishesList = string.split(',');
            var counter = 0;
            for (var i = 0; i < dishesList.length; i++) {
                if (dishesList[i].trim()) counter++;
            }
            return counter;
        }
    }
}());