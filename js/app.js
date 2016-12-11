(function() {
    'use strict';
    angular.module('myApp', [])
        .controller('main', function($scope) {
            $scope.checkValue = function() {
                var list = $scope.dishes
                var dish = calculateDishes(list);
                $scope.msg = verifyNumber(dish);
            }

            function calculateDishes(string) {
                var splits = [];
                var newSplits = [];
                splits = string.split(',');
                for (var i = 0; i < splits.length; i++) {
                    if (splits[i] != "") {
                        newSplits.push(splits[i]);
                    }
                }
                return newSplits;
            }

            function verifyNumber(string) {
                if (string.length > 3) {
                    return "Too much!";
                } else {
                    return "Enjoy!";
                }
            }
        });
})();
