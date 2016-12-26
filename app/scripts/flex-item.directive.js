'use strict';
angular
  .module('FlexUI')
  .directive('flexItem', flexItem);
flexItem.$inject = ['flex'];
function flexItem(flex) {
  var directive = {
    scope: false,
    // link: link, // link函数，进行DOM操作
    compile: compile,
    template: '<div class="flex-item" ng-transclude></div>', // html路径
    transclude: true,
    replace: true,

    restrict: 'E' //指令的使用方式
  };
  return directive;
  function compile(tElement, tAttrs) {
    /*获取页面参数*/
    var heightValue = Number(tAttrs['height']);
    /*通过参数，配置element 样式*/
    if (heightValue) flex.changeElementHeight(heightValue, tElement);
  }


}
