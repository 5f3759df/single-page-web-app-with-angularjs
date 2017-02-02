(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/t-items.html',
            bindings: {
                items: '<'
            }
        });

})();