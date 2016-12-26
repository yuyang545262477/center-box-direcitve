'use strict';
angular
  .module('FlexUI')
  .directive('flexBox', flexBox);
/*
 *  flex-box
 *  与flex-section 非常相似
 *
 *  flex-box主要目的，负责内部实际元素的排版布局
 *  flex-section 负责整体的布局情况 ，做一个承上启下的作用
 * */

flexBox.$inject = ['flex'];
function flexBox(flex) {
  var directive = {
    scope: false,
    // link: link, // link函数，进行DOM操作
    compile: compile,
    template: '<div class="flex-box" ng-transclude></div>', // html路径
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
