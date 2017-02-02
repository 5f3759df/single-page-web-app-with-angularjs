(function() {
    'use strict';

    angular.module('MenuApp', ['Data', 'ui.router'])
        .controller('CategoriesController', CategoriesController)
        .controller('CategoryItemsController', CategoryItemsController);

    CategoryItemsController.$inject = ['items'];

    function CategoryItemsController(items) {
        var ctrlItems = this;
        ctrlItems.items = items.menu_items;
        console.log(ctrlItems.items);
    }


    CategoriesController.$inject = ['categoriesRoute'];

    function CategoriesController(categoriesRoute) {
        var catList = this;
        catList.categories = categoriesRoute;
        // console.log(catList.categories);
    }

})();