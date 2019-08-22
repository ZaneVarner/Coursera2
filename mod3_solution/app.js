(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('APIPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&',
      nothingFound: '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchTerm = "";
  list.found = [];
  list.nothingFound = false;

  list.narrowDown = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      list.found = response;
      list.nothingFound = !list.found.length;
    })
    .catch(function (error) {
      console.log("Something has gone wrong.")
    });
  };

  list.removeItem = function (index) {
    list.found.splice(index, 1);
  };

}

MenuSearchService.$inject = ['$http', 'APIPath'];
function MenuSearchService($http, APIPath) {
  var search = this;

  search.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: APIPath
    }).then(function (result) {
      var foundItems = [];
      if (!searchTerm) {
        return foundItems;
      }
      result.data.menu_items.forEach(function (item) {
        if (item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
          foundItems.push(item);
        }
      });
      // return processed items
      return foundItems;
    });
  };

}

})();
