"use strict";!function(){function e(){function e(e,n,c){function l(e){n.css({height:Number(e)/16+"rem"})}function t(e){JSON.parse(e.toLowerCase())===!0&&n.addClass("col")}var o=angular.copy(e.height),r=angular.copy(e.col);o&&l(o),r&&t(r)}return{restrict:"E",scope:{height:"@",col:"@"},template:'<div class="flex-section" ng-transclude></div>',link:e,replace:!0,transclude:!0}}function n(){function e(e,n,c){function l(e){JSON.parse(e.toLowerCase())===!0&&n.addClass("col")}function t(e){n.css({flex:Number(e)})}function o(e){JSON.parse(e.toLowerCase())===!0&&n.addClass("leftAround")}var r=angular.copy(e.col),a=angular.copy(e.flex),s=angular.copy(e.leftAround);r&&l(r),a&&t(a),s&&o(s)}return{restrict:"E",scope:{col:"@",flex:"@",leftAround:"@"},template:'<div class="flex-box" ng-transclude></div>',link:e,replace:!0,transclude:!0}}angular.module("flex",[]).directive("flexSection",e).directive("flexBox",n)}();