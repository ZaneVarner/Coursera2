(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function () {
    if ($scope.items == undefined) {
      $scope.message = "";
    } else {

      var str = $scope.items;

      var str = str.replace(/\s/g, '');
      var str = str.replace(/,+/g, ' ')
      var str = str.trim();

      var itemList = str.split(/\s/);

      if (str == "") {
        $scope.message = "";
      } else if (itemList.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }

  };

}

// Start over this algorithm

})();
