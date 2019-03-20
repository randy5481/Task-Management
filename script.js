angular.module('App', []).controller('CrudCtrl', ['$scope',
	function($scope) {
	  $scope.Profiles = [
	      {
	        name : "TASK_1",
					editable : false,
					taskDone: true,
					comments:[
						{
							description:"Comment1",
							date:"22-03-19"
						},
						{
							description:"Comment2",
							date:"24-03-19"
						},
					]
	      }
	    ];
	 
	 $scope.entity = {};
	 $scope.commentsData =[];
	 $scope.comment="";
	 $scope.currentIndex=null;
	 $scope.showCommentCond = false;
	    
	 $scope.edit = function(index){
	   $scope.entity = $scope.Profiles[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.Profiles.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.Profiles[index].editable = false;
	   
	 }

	 $scope.saveComment = function(){
		$scope.Profiles[$scope.currentIndex].comments.push({
			description:$scope.comment,
			date: new Date()
		});
		
	}

	 $scope.showComments =function(index){
		$scope.currentIndex=index;
		$scope.showCommentCond = true;
		$scope.commentsData = $scope.Profiles[index].comments;
	 }

	 $scope.taskDone = function(index){
	 $scope.Profiles[index].taskDone = true;
	}
	 
	 $scope.add = function(){
	   $scope.Profiles.push({
	      name : "",
				editable : true,
				comments:[]
				
	   })
	 }
	}
]);