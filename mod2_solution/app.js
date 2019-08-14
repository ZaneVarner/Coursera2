(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var buyItems = [
    {
      name: "Gold Rings",
      quantity: 5
    },
    {
      name: "Calling Birds",
      quantity: 4
    },
    {
      name: "French Hens",
      quantity: 3
    },
    {
      name: "Turtle Doves",
      quantity: 2
    },
    {
      name: "Partridge in a Pear Tree",
      quantity: 1
    }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push({
      name: buyItems[itemIndex].name,
      quantity: buyItems[itemIndex].quantity
    });
    buyItems.splice(itemIndex, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
