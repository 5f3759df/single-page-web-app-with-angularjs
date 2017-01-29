(function() {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('menuApiUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

    function FoundItems() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            restrict: "E",
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: ItemsDirectiveController,
            bindToController: true,
            controllerAs: 'itemsDir',
            transclude: true
        };
        return ddo;
    }

    function ItemsDirectiveController() {}

    NarrowItDownController.$inject = ['MenuSearchService']

    function NarrowItDownController(MenuSearchService) {
        var nItCtr = this;
        nItCtr.whatIwant = "";
        nItCtr.message = "";
        nItCtr.found = [];

        nItCtr.showMe = function() {
            if (nItCtr.whatIwant === undefined || nItCtr.whatIwant === "")
                nItCtr.message = "No results found for that query";
            else {
                var x = nItCtr.whatIwant.toLowerCase();
                MenuSearchService.getMatchedMenuItems(x)
                    .then(function(resp) {
                        nItCtr.found = resp;
                        // console.log(nItCtr.found);

                        if (nItCtr.found !== undefined)
                            if (nItCtr.found.length < 1)
                                nItCtr.message = "No results found for that query";
                            else
                                nItCtr.message = "";
                    });
            }
        };
        nItCtr.remove = function(index) {
            nItCtr.found.splice(index, 1);
        }

    }

    MenuSearchService.$inject = ['$http', 'menuApiUrl'];

    function MenuSearchService($http, menuApiUrl) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: 'GET',
                url: menuApiUrl
            }).then(function(result) {
                var items = result.data.menu_items,
                    foundItems = [];
                for (var el of items) {
                    if (el.description.toLowerCase().indexOf(searchTerm) >= 0) {
                        foundItems.push(el);
                    }
                }
                return foundItems;
            });
        }
    }


}());