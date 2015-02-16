'use strict';
angular.module('jschannel').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.closeModal = $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});