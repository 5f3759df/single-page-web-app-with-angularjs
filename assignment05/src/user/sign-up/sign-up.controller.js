(function() {
    "use strict";

    angular.module('common')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService', 'ApiPath'];

    function SignUpController(MenuService, UserService, ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;

        $ctrl.userInfo = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            favoriteDishCode: ""
        };
        $ctrl.favDishPrev = false;
        $ctrl.isDishCodeCorrect = false;
        $ctrl.signingUpMessage = "";

        $ctrl.checkIfDishCodeIsValid = function() {
            // console.log("przed  " + $ctrl.isDishCodeCorrect);
            $ctrl.userInfo.favoriteDishCode = $ctrl.userInfo.favoriteDishCode.toUpperCase();
            // $ctrl.userInfo.favoriteDishCode = $filter('uppercase', $ctrl.userInfo.favoriteDishCode);
            if ($ctrl.userInfo.favoriteDishCode.length > 1) {
                MenuService.getProductByShortName($ctrl.userInfo.favoriteDishCode).then(function(response) {
                    // console.log("isThereCategoryWithShortName: " + shortName);
                    console.log("response: " + response.data);
                    if (response.error) {
                        $ctrl.favDishPrev = false;
                        $ctrl.isDishCodeCorrect = false;
                        // $scope.myForm.file.$setValidity("", false);
                        // console.log($ctrl.suform[favoriteDishCode]);
                    } else {
                        $ctrl.favDishPrev = response.data;
                        $ctrl.isDishCodeCorrect = true;
                    }
                    // console.log(response.status);
                }).catch(function(response) {
                    $ctrl.favDishPrev = false;
                    $ctrl.isDishCodeCorrect = false;
                    // console.log("catch" + x.data);
                    // return false;
                });
            }
            console.log("$:" + $ctrl.isDishCodeCorrect);

            // console.log("$ctrl.isDishCodeCorrect: " + $ctrl.isDishCodeCorrect);
            // console.log("po $ctrl.favDishPrev: " + $ctrl.favDishPrev);
            // console.log("$ctrl.suform: " + $ctrl.suform);
            // console.log("favDash " + favDish);
            // console.log("$ctrl.userInfo.favoriteDishCode " + $ctrl.userInfo.favoriteDishCode);
        }

        $ctrl.addUser = function() {
            console.log($ctrl.favDishPrev);

            if ($ctrl.isDishCodeCorrect) {
                UserService.signUp($ctrl.userInfo);
                $ctrl.signingUpMessage = "Your information has been saved";
                console.log(UserService.userLoggedIn);
            } else {
                $ctrl.signingUpMessage = "Please correct your favorite dish code!";

            }

        }
    }
})();