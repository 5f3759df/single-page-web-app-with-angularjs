(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/t-categorylist.html',
            bindings: {
                comcat: '<'
            }
        });

})();