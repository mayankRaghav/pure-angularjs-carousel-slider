var sliderApp = angular.module('sliderApp',['ui.bootstrap']);
sliderApp.controller('sliderController', function ($scope) {
    $scope.slideSpeedInMS = 0;
    $scope.slides = [ 'http://www.personal.psu.edu/jul229/mini.jpg',
	                    'https://oss.adm.ntu.edu.sg/jays0001/wp-content/uploads/sites/38/2015/09/betterbusiness_jpg.jpg', 
	                    'https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg',
	                    'http://img01.deviantart.net/bebf/i/2008/242/f/4/nemo_by_jtpg.png',
	                    'https://www.xbrl.org/wp-content/uploads/2015/01/sustainability2-620x471.jpg'
	                   ];
});
