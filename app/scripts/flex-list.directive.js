'use strict';
angular
  .module('FlexUI')
  .directive('flexList', flexList);
function flexList() {
  var directive = {
    scope: false,
    template: '<div class="flex-list" ng-transclude></div>', // html路径
    transclude: true,
    replace: true,
    restrict: 'E' //指令的使用方式
  };
  return directive;


}
