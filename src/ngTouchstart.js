"use strict";

angular.module("ngTouchstart", []).directive("ngTouchstart", function () {
  return {
    link: function ($scope, $element, $attrs) {
      $element.bind('touchstart', onTouchStart);
      
      function onTouchStart(event) {
        var method = $element.attr('ng-touchstart');
        $scope.$event = event;
        $scope.$apply(method);
      };
    }
  };
});
