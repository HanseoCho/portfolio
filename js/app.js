var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "trulo393@gmail.com";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "조한서";
		$rootScope.MenuList = [
			"안녕하세요 저는 모든일에 최선을 다하는 조한서입니다.",
			"항상 긍적인 마인드로 문제를 해결해나가겠습니다.",
		    "감사합니다.",
		    "보유기술은 아래와 같습니다.",
			"- JAVA : Spring, JSP.Servlet",
			"- Front end: HTML & CSS & Javascript",
			"- Database : mysql",
			"- OS: Linux, Windows"
			];
		
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
            {
			 path: "portfolio/",
			 url : "team/DungeonStory.pdf", 
			 title: "Team Game",
			 name: "Impression",
			 img: "team/DungeonSotry1.gif",
			 img2: "team/DungeonSotry2.gif",
			 type : true, 
			 contents: "졸작으로 4명에서 만든 안드로이드 게임입니다. 게임을 좋아하는 마음만으로 만들었는데 실제 게임제작은 개발적인 요소와 함께 많은 디자인 요소들이 들어가는것을 깨달았습니다. 마지막까지 몬스터 디자인으로 인해 스테이지는 5가지 이하로 구성되어 있지만 게임이 가능하도록 해서 많은 교수님들에게 잘했다는 반응을 얻었고 장려상을 받았습니다. 이번 게임개발은 게임제작시 고려해야할 여러가지 상황들을 직접 체감하게 되어서 정말 좋은 경험이었습니다."
			},            
			{
			 path: "portfolio/",
			 url : "team/[team]movie.pdf", 
			 title: "Team UI",
			 name: "Impression",
			 img: "team/Portfoliop.png",
			 img2: "team/Portfoliop.png",
			 type : true, 
			 contents: "처음으로 개발을 한 팀 프로젝트인데 반응형웹은 처음 만들어봐서 걱정을 많이 했었습니다. 팀원들과 서로 도와가며 작업을 해서 무사히 프로젝트를 마칠 수 있었습니다. 특히 만들면서 반응형으로 만든다는게 기존 UI부분에 영향이 심각하게 미쳐서 다시 만들기도해서 반응형 웹에 대해 배울수있는 좋은 프로젝트였습니다."
			},{
			 path: "portfolio/",
			 url : "personal/project1_.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/Portfoliop.png",
			 img2: "personal/Portfoliop.png",
			 type : false,
			 contents: "수업 중에 배운 지식으로 MVC2 구조로 처음 만든 개인 프로젝트입니다. 수업 중에 배운 지식을 다시금 확인하고 좀 더 익숙하게 쓸 수 있는 기회였습니다. 4일 정도의 시간 동안 만들고 싶은 사이트를 하나씩 구현해 내다보니 기능들이 하나씩 쌓여서 점점 사이트가 되어가고 있었습니다. 프로젝트를 마무리하면서 아직은 미흡하지만 추후에는 기능적인 면을 더 보완해서 완성하고 싶습니다."
			},{
			 path: "portfolio/",
			 url : "personal/project2_.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/Portfoliop2.png",
			 img2: "personal/Portfoliop2.png",
			 type : false, 
			 contents: "웹쇼핑몰과 빅데이터를 결합해서 REST API구조로 만든 개인 프로젝트 입니다. 어떻게 만들지 실제 웹 쇼핑몰을 분석하면서 많은 고민을 하면서 만들었습니다. 1달간의 시간동안 만들었는데 UI부분이 시간을 너무 많이 잡아먹어서 기능적인 면은 구현할수 있는 시간은 7일도 안되었는데 DB를 통해 변동적으로 만들는데 기존에 만든 틀이 잘못되서 UI를 다시 만드는데 시간을 잡아먹기도 했습니다. 그래도 프로젝트를 마무리하면서 웹 쇼핑몰을 어떻게 만들어야할지에 대해서 알게 되었고, 결제와 보안요소를 보완해서 완전한 쇼핑몰을 만들어 보고 싶은 생각이 들었습니다."
			},{
			 path: "media/",
			 url : '', 
			 title: "Personal",
			 name: "Media",
			 img: "personal/Portfoliop3.png",
			 img2: 'personal/Portfoliop3.png',
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
