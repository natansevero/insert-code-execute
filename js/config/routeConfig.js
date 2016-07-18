angular.module("app").config(function($routeProvider){
  $routeProvider.when("/" , {
    templateUrl: "view/edit_code.html",
    controller: "editCodeCtrl"
  });

  $routeProvider.when("/execute", {
    templateUrl: "execute_code.html",
    controller: "editCodeCtrl"
  });

  $routeProvider.otherwise({
    redirecTo: "/"
  });
});
