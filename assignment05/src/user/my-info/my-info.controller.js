(function() {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', 'UserService', 'ApiPath'];

    function MyInfoController(MenuService, UserService, ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        $ctrl.user = UserService.userLoggedIn;
        if ($ctrl.user) {
            MenuService.getProductByShortName($ctrl.user.favoriteDishCode).then(function(response) {
                $ctrl.userFavDish = response.data;

                // console.log(response.status);
            }).catch(function(response) {
                $ctrl.favDishPrev = false;
            });
        } else {
            $ctrl.message = "No user data, please sign up.";
        }
    }
})();