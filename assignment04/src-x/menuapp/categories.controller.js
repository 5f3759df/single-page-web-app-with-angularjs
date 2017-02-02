(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['categoriesRoute'];

    function CategoriesController(categoriesRoute) {
        var categoriesList = this;
        categoriesList.categories = categoriesRoute;
    }

})();