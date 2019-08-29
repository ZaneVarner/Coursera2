(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService', '$rootScope', 'ApiPath'];
function MyInfoController (MyInfoService, $rootScope, ApiPath) {
  var myInfoCtrl = this;

  myInfoCtrl.basePath = ApiPath;

  myInfoCtrl.$onInit = function () {
    myInfoCtrl.submitted = MyInfoService.submitted;
    myInfoCtrl.firstname = MyInfoService.firstname;
    myInfoCtrl.lastname = MyInfoService.lastname;
    myInfoCtrl.email = MyInfoService.email;
    myInfoCtrl.phone = MyInfoService.phone;
    myInfoCtrl.favDish = MyInfoService.favDish;
  }

}

})();
