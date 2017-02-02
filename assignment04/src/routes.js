(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/t-home.html'
            })


        .state('categories', {
                url: '/categories',
                templateUrl: 'src/t-categories.html',
                controller: 'CategoriesController as catList',
                resolve: {
                    categoriesRoute: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('categories.items', {
                url: '/items/{categoryName}',
                templateUrl: 'src/t-items.html',
                controller: 'CategoryItemsController as ctrlItems',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            });

    }
})();