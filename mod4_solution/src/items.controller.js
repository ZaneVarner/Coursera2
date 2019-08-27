(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['categoryDetail'];
function ItemsController(categoryDetail) {
  var itemsList = this;
  itemsList.category = categoryDetail.category;
  itemsList.items = categoryDetail.menu_items;
}

})();
