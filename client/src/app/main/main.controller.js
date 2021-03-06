'use strict';

angular.module('jschannel')
  .controller('MainCtrl', function ($scope, $document, $modal) {

    var modalInstance = null;

  	$scope.associations = [
  		{ url: 'http://www.github.com', hasImg: true},
  		{ url: 'http://jsconf.com', text: 'JSConf'},
  		{ url: 'http://communityjs.org', text: 'CommunityJS.org'},
  		{ url: 'http://bangalorejs.org', hasImg: true}
  	];

  	$scope.members = [
      { name: 'Amit Kumar', twitter: 'https://twitter.com/toamit', facebook: 'https://www.facebook.com/toamitkumar', linkedin: 'https://www.linkedin.com/in/toamitkumar', title: 'Digital Expert'},
  		{ name: 'Amit Anand', twitter: 'https://twitter.com/iamitanand', facebook: 'https://www.facebook.com/aanand388', linkedin: 'http://au.linkedin.com/in/iamitanand', title: 'Digital Engagement Manager'},
  		{ name: 'Naresh Sharma', twitter: 'https://twitter.com/narunaram', facebook: 'https://www.facebook.com/naresh.sharma.798', linkedin: 'http://in.linkedin.com/in/narunaram', title: 'Digital Consultant'},
  		{ name: 'Niraj Bhandari', twitter: 'https://twitter.com/nirajkbhandari ', facebook: 'https://www.facebook.com/nirajkbhandari', linkedin: 'http://in.linkedin.com/in/nirajbhandari', title: 'Product Manager'},
  		{ name: 'Suman Paul', twitter: 'https://twitter.com/sumankpaul', facebook: 'https://www.facebook.com/paul.sumank', linkedin: 'https://in.linkedin.com/in/skeep/', title: 'Senior Digital Analyst'}
  	];

    $scope.scrollToTop = function() {
      $document.scrollTop(0, 5000);
    };

    $scope.openModal = function(which) {
      switch(which) {
        case 'conference': 
          modalInstance = $modal.open({
            templateUrl: 'components/modals/conference1.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg'
          });
          break;
        case 'meetup':
          modalInstance = $modal.open({
            templateUrl: 'components/modals/meetup.html',
            controller: 'MeetupController',
            size: 'lg'
          });
          break;
        case 'conduct':
          modalInstance = $modal.open({
            templateUrl: 'components/modals/codeofconduct.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg'
          });
          break;
      }
    };
  });
