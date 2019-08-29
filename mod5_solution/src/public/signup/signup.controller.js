(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService', '$rootScope'];
function SignUpController (MenuService, MyInfoService, $rootScope) {
  var signUpCtrl = this;

  signUpCtrl.submit = function (shortName) {
    var promise = MenuService.getMenuItem(shortName);
    promise.then(function (response) {
      signUpCtrl.favDish = response.menuItem;
      signUpCtrl.message = response.message;

      if (response.menuItem) {
        $rootScope.$broadcast('signup:submitted', {
          submitted: true,
          firstname: signUpCtrl.firstname,
          lastname: signUpCtrl.lastname,
          email: signUpCtrl.email,
          phone: signUpCtrl.phone,
          favDish: signUpCtrl.favDish
        });
      }

    });

  };

}

})();
