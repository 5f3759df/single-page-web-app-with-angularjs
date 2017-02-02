(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/t-itemslist.html',
            controller: 'CategoryItemsController as ctrlItems',
            bindings: {
                itemslist: '<'
            }
        })


})();