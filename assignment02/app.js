(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService']

    function ToBuyController(ShoppingListCheckOffService) {
        var tobuy = this;
        tobuy.items = ShoppingListCheckOffService.getItemsToBuy();
        tobuy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }

    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

    }


    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "apples", quantity: 5 },
            { name: "milk", quantity: 3 },
            { name: "banana", quantity: 4 },
            { name: "snacks", quantity: 40 }
        ];
        var boughtItems = [];

        service.buyItem = function(itemIndex) {
            var x = itemsToBuy.splice(itemIndex, 1);
            boughtItems.push({ name: x[0].name, quantity: x[0].quantity });
        }
        service.getItemsToBuy = function() {
            return itemsToBuy;
        }
        service.getAlreadyBoughtItems = function() {
            return boughtItems;
        }
    }

}());