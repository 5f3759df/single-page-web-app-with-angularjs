(function() {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('menuCategoriesUrl', '//davids-restaurant.herokuapp.com/categories.json')
        .constant('itemsUrl', '//davids-restaurant.herokuapp.com/menu_items.json');


    MenuDataService.$inject = ['$http', 'menuCategoriesUrl', 'itemsUrl']

    function MenuDataService($http, menuCategoriesUrl, itemsUrl) {
        var service = this;

        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: menuCategoriesUrl
            }).then(function(result) {
                // console.log(result.data);
                return result.data;
            });
        }

        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method: 'GET',
                url: itemsUrl,
                params: {
                    'category': categoryShortName
                }
            }).then(function(result) {
                // console.log(result.data);
                return result.data;
            });
        }
    }
})();