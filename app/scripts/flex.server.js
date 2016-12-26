'use strict';

angular.module('FlexUI')
  .factory('flex', flex);
/*
 *  存放flex 样式指令，共同函数
 * */
function flex() {
  var serve = {
    changeElementHeight: changeElementHeight,
    changeElementWidth: changeElementWidth,
    changeElementFlex: changeElementFlex
  };
  return serve;
  function changeElementHeight(heightValue, element) {
    element.css({
      height: heightValue / 16 + 'rem'
    });
  }

  function changeElementWidth(widthValue, element) {
    element.css({
      width: widthValue / 16 + 'rem'
    });
  }

  function changeElementFlex(flexValue, element) {
    element.css({
      flex: flexValue + ' 1 0%',
      MsFlex: flexValue + ' 1 0%',
      WebkitBoxFlex: flexValue + ' 1 0%'
    })
  }

}
