'use strict';
angular
  .module('FlexUI')
  .directive('flexSection', flexSection);
flexSection.$inject = ['flex'];
function flexSection(flex) {
  var directive = {
    scope: false,
    // link: link, // link函数，进行DOM操作
    compile: compile,
    template: '<div class="flex-section" ng-transclude></div>', // html路径
    transclude: true,
    replace: true,
    restrict: 'E' //指令的使用方式
  };
  return directive;
  function compile(tElement, tAttrs) {
    /*获取页面参数*/
    var flexValue = Number(tAttrs['flex']);
    var heightValue = Number(tAttrs['height']);
    var widthValue = Number(tAttrs['width']);
    /*通过参数，配置element 样式*/
    if (flexValue) flex.changeElementFlex(flexValue, tElement);
    if (heightValue) flex.changeElementHeight(heightValue, tElement);
    if (widthValue) flex.changeElementWidth(widthValue, tElement);
  }


}
