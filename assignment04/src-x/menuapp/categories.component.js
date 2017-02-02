(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menuapp/templates/t-categories.html',
            bindings: {
                componentCategories: '<'
            }
        });

})();