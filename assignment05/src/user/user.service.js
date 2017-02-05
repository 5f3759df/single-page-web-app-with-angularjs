(function() {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


    UserService.$inject = ['$http', 'ApiPath'];

    function UserService($http, ApiPath) {
        var service = this;
        service.userLoggedIn = undefined;

        service.signUp = function(userData) {
            service.userLoggedIn = userData;
        }

        service.removeUser = function() {
            service.userLoggedIn = undefined;
        }

    }

})();