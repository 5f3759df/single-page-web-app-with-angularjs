(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/'
            })


        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/t-categorylist.html',
            // templateUrl: 'src/menuapp/templates/t-categories.html',
            // controller: 'CategoriesController as catList',
            controller: 'CategoriesController as categoriesList',
            resolve: {
                categoriesRoute: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories()
                }]
            }
        });

        // .state('mainList.itemDetail', {
        //     url: '/item-detail/{itemId}',
        //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        //     controller: "ItemDetailController as itemDetail"
        // });

    }

})();