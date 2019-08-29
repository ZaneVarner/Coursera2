(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = ['$rootScope'];
function MyInfoService ($rootScope) {
  var service = this;

  service.submitted = false;

  $rootScope.$on('signup:submitted', function (event, data) {
    service.submitted = data.submitted;
    service.firstname = data.firstname;
    service.lastname = data.lastname;
    service.email = data.email;
    service.phone = data.phone;
    service.favDish = data.favDish;
  });
}

})();
