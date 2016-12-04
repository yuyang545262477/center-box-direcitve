(function () {
  'use strict';
  angular.module('flex', [])
    .directive('flexSection', flexSection)
    .directive('flexBox', flexBox);

  function flexSection() {
    return {
      restrict: 'E',
      scope: {
        height: '@',
        col: '@'
      },
      template: '<div class="flex-section" ng-transclude></div>',
      link: link,
      replace: true,
      transclude: true
    };
    function link(scope, element, attr) {
      var heightValue = angular.copy(scope.height);
      var col = angular.copy(scope.col);
      if (heightValue) setSectionHeight(heightValue);
      if (col) changeDirection(col);


      function setSectionHeight(heightValue) {
        element.css({
          height: Number(heightValue) / 16 + 'rem'
        })
      }

      function changeDirection(col) {
        if (JSON.parse(col.toLowerCase()) !== true) return;
        element.addClass('col');
      }
    }
  }

  function flexBox() {
    return {
      restrict: 'E',
      scope: {
        col: '@',
        flex: '@',
        leftAround: '@'
      },
      // templateUrl: 'templates/directive/flex-box.html',
      template: '<div class="flex-box" ng-transclude></div>',
      link: link,
      replace: true,
      transclude: true
    };

    function link(scope, element, attr) {
      /*
       *   获取参数，判断是否为true,
       *   控制styles
       * */
      //获取指令参数
      var direction = angular.copy(scope.col);
      var flex = angular.copy(scope.flex);
      var leftAround = angular.copy(scope.leftAround);

      //判断其中的值
      if (direction) changeDirection(direction);
      if (flex) changeFlexSize(flex);
      if (leftAround) leftAroundStyle(leftAround);

      //改变内部元素排列方向
      function changeDirection(booleanValue) {
        if (JSON.parse(booleanValue.toLowerCase()) !== true)return;
        element.addClass('col');
      }

      //改变flex-box 动态比例
      function changeFlexSize(flex) {
        var number = Number(flex);
        element.css({
          flex: number,
          MsFlex: number,
          WebkitBoxFlex: number
        })
      }

      //  改变flex布局
      function leftAroundStyle(booleanValue) {
        if (JSON.parse(booleanValue.toLowerCase()) !== true) return;
        element.addClass('leftAround')
      }

    }
  }
})();
