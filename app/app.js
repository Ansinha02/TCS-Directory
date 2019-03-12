var myTCSApp = angular.module('myTCSApp', ['ngRoute', 'ui.grid', 'ui.grid.pagination']);

myTCSApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html',
      controller: 'dataController'
    })
    .when('/directory',{
      templateUrl: 'views/directory.html',
      controller: 'dataController'
    })
    .when('/requirements', {
      templateUrl: 'views/requirementList.html',
      controller: 'requirementController'
    })
    .when('/addNewEmployee',{
      templateUrl: '/views/addNewEmployee.html',
      controller: 'dataController'
    })
    .when('/:id',{
      templateUrl: '/views/employeeDetail.html',
      controller: 'empDetailController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);

myTCSApp.controller('requirementController',['$scope','$http',function($scope, $http){
    // var gridExample = this;
      //console.log($scope);
      //this.title = "Requirements Grid";
      $scope.gridOptions = {
        enableFiltering: true,
        enableGridMenu: true,
        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        // showColumnFooter :true,
        columnDefs: [
            {field: 'id'},
            {field: 'projectName'},
            {field: 'employeeRequired'}
        ]
      };

    $http.get('data/require.json')
      .then(function(response){
        $scope.gridOptions.data = response.data;
      }).catch(function() {
        console.log('Error');
    });

$scope.addData = function(){
  $scope.gridOptions.data.push({
    id: parseInt($scope.newProject.id),
    projectName: $scope.newProject.name,
    employeeRequired: $scope.newProject.requirement,
  });

  $scope.newProject.id = "";
  $scope.newProject.name = "";
  $scope.newProject.requirement = "";
}
    // this.gridOptions.data =[
    //     {
    //         "name": "Ethel Price",
    //         "gender": "female",
    //         "company": "Enersol"
    //     },
    //     {
    //         "name": "Claudine Neal",
    //         "gender": "female",
    //         "company": "Sealoud"
    //     },
    //     {
    //         "name": "Beryl Rice",
    //         "gender": "female",
    //         "company": "Velity"
    //     },
    //     {
    //         "name": "Wilder Gonzales",
    //         "gender": "male",
    //         "company": "Geekko"
    //     },
    //     {
    //         "name": "Georgina Schultz",
    //         "gender": "female",
    //         "company": "Suretech"
    //     },
    //     {
    //         "name": "Carroll Buchanan",
    //         "gender": "male",
    //         "company": "Ecosys"
    //     },
    //     {
    //         "name": "Valarie Atkinson",
    //         "gender": "female",
    //         "company": "Hopeli"
    //     },
    //     {
    //         "name": "Schroeder Mathews",
    //         "gender": "male",
    //         "company": "Polarium"
    //     },
    //     {
    //         "name": "Lynda Mendoza",
    //         "gender": "female",
    //         "company": "Dogspa"
    //     },
    //     {
    //         "name": "Sarah Massey",
    //         "gender": "female",
    //         "company": "Bisba"
    //     },
    //     {
    //         "name": "Robles Boyle",
    //         "gender": "male",
    //         "company": "Comtract"
    //     },
    //     {
    //         "name": "Evans Hickman",
    //         "gender": "male",
    //         "company": "Parleynet"
    //     },
    //     {
    //         "name": "Dawson Barber",
    //         "gender": "male",
    //         "company": "Dymi"
    //     },
    //     {
    //         "name": "Bruce Strong",
    //         "gender": "male",
    //         "company": "Xyqag"
    //     },
    //     {
    //         "name": "Nellie Whitfield",
    //         "gender": "female",
    //         "company": "Exospace"
    //     },
    //     {
    //         "name": "Jackson Macias",
    //         "gender": "male",
    //         "company": "Aquamate"
    //     },
    //     {
    //         "name": "Pena Pena",
    //         "gender": "male",
    //         "company": "Quarx"
    //     },
    //     {
    //         "name": "Lelia Gates",
    //         "gender": "female",
    //         "company": "Proxsoft"
    //     },
    //     {
    //         "name": "Letitia Vasquez",
    //         "gender": "female",
    //         "company": "Slumberia"
    //     },
    //     {
    //         "name": "Trevino Moreno",
    //         "gender": "male",
    //         "company": "Conjurica"
    //     },
    //     {
    //         "name": "Barr Page",
    //         "gender": "male",
    //         "company": "Apex"
    //     },
    //     {
    //         "name": "Kirkland Merrill",
    //         "gender": "male",
    //         "company": "Utara"
    //     },
    //     {
    //         "name": "Blanche Conley",
    //         "gender": "female",
    //         "company": "Imkan"
    //     },
    //     {
    //         "name": "Atkins Dunlap",
    //         "gender": "male",
    //         "company": "Comveyor"
    //     },
    //     {
    //         "name": "Everett Foreman",
    //         "gender": "male",
    //         "company": "Maineland"
    //     },
    //     {
    //         "name": "Gould Randolph",
    //         "gender": "male",
    //         "company": "Intergeek"
    //     },
    //     {
    //         "name": "Kelli Leon",
    //         "gender": "female",
    //         "company": "Verbus"
    //     },
    //     {
    //         "name": "Freda Mason",
    //         "gender": "female",
    //         "company": "Accidency"
    //     },
    //     {
    //         "name": "Tucker Maxwell",
    //         "gender": "male",
    //         "company": "Lumbrex"
    //     },
    //     {
    //         "name": "Yvonne Parsons",
    //         "gender": "female",
    //         "company": "Zolar"
    //     },
    //     {
    //         "name": "Woods Key",
    //         "gender": "male",
    //         "company": "Bedder"
    //     },
    //     {
    //         "name": "Stephens Reilly",
    //         "gender": "male",
    //         "company": "Acusage"
    //     },
    //     {
    //         "name": "Mcfarland Sparks",
    //         "gender": "male",
    //         "company": "Comvey"
    //     },
    //     {
    //         "name": "Jocelyn Sawyer",
    //         "gender": "female",
    //         "company": "Fortean"
    //     },
    //     {
    //         "name": "Renee Barr",
    //         "gender": "female",
    //         "company": "Kiggle"
    //     },
    //     {
    //         "name": "Gaines Beck",
    //         "gender": "male",
    //         "company": "Sequitur"
    //     },
    //     {
    //         "name": "Luisa Farrell",
    //         "gender": "female",
    //         "company": "Cinesanct"
    //     },
    //     {
    //         "name": "Robyn Strickland",
    //         "gender": "female",
    //         "company": "Obones"
    //     },
    //     {
    //         "name": "Roseann Jarvis",
    //         "gender": "female",
    //         "company": "Aquazure"
    //     },
    //     {
    //         "name": "Johnston Park",
    //         "gender": "male",
    //         "company": "Netur"
    //     },
    //     {
    //         "name": "Wong Craft",
    //         "gender": "male",
    //         "company": "Opticall"
    //     },
    //     {
    //         "name": "Merritt Cole",
    //         "gender": "male",
    //         "company": "Techtrix"
    //     },
    //     {
    //         "name": "Dale Byrd",
    //         "gender": "female",
    //         "company": "Kneedles"
    //     },
    //     {
    //         "name": "Sara Delgado",
    //         "gender": "female",
    //         "company": "Netagy"
    //     },
    //     {
    //         "name": "Alisha Myers",
    //         "gender": "female",
    //         "company": "Intradisk"
    //     },
    //     {
    //         "name": "Felecia Smith",
    //         "gender": "female",
    //         "company": "Futurity"
    //     },
    //     {
    //         "name": "Neal Harvey",
    //         "gender": "male",
    //         "company": "Pyramax"
    //     },
    //     {
    //         "name": "Nola Miles",
    //         "gender": "female",
    //         "company": "Sonique"
    //     },
    //     {
    //         "name": "Herring Pierce",
    //         "gender": "male",
    //         "company": "Geeketron"
    //     },
    //     {
    //         "name": "Shelley Rodriquez",
    //         "gender": "female",
    //         "company": "Bostonic"
    //     },
    //     {
    //         "name": "Cora Chase",
    //         "gender": "female",
    //         "company": "Isonus"
    //     },
    //     {
    //         "name": "Mckay Santos",
    //         "gender": "male",
    //         "company": "Amtas"
    //     },
    //     {
    //         "name": "Hilda Crane",
    //         "gender": "female",
    //         "company": "Jumpstack"
    //     },
    //     {
    //         "name": "Jeanne Lindsay",
    //         "gender": "female",
    //         "company": "Genesynk"
    //     },
    //     {
    //         "name": "Frye Sharpe",
    //         "gender": "male",
    //         "company": "Eplode"
    //     },
    //     {
    //         "name": "Velma Fry",
    //         "gender": "female",
    //         "company": "Ronelon"
    //     },
    //     {
    //         "name": "Reyna Espinoza",
    //         "gender": "female",
    //         "company": "Prismatic"
    //     },
    //     {
    //         "name": "Spencer Sloan",
    //         "gender": "male",
    //         "company": "Comverges"
    //     },
    //     {
    //         "name": "Graham Marsh",
    //         "gender": "male",
    //         "company": "Medifax"
    //     },
    //     {
    //         "name": "Hale Boone",
    //         "gender": "male",
    //         "company": "Digial"
    //     },
    //     {
    //         "name": "Wiley Hubbard",
    //         "gender": "male",
    //         "company": "Zensus"
    //     },
    //     {
    //         "name": "Blackburn Drake",
    //         "gender": "male",
    //         "company": "Frenex"
    //     },
    //     {
    //         "name": "Franco Hunter",
    //         "gender": "male",
    //         "company": "Rockabye"
    //     },
    //     {
    //         "name": "Barnett Case",
    //         "gender": "male",
    //         "company": "Norali"
    //     },
    //     {
    //         "name": "Alexander Foley",
    //         "gender": "male",
    //         "company": "Geekosis"
    //     },
    //     {
    //         "name": "Lynette Stein",
    //         "gender": "female",
    //         "company": "Macronaut"
    //     },
    //     {
    //         "name": "Anthony Joyner",
    //         "gender": "male",
    //         "company": "Senmei"
    //     },
    //     {
    //         "name": "Garrett Brennan",
    //         "gender": "male",
    //         "company": "Bluegrain"
    //     },
    //     {
    //         "name": "Betsy Horton",
    //         "gender": "female",
    //         "company": "Zilla"
    //     },
    //     {
    //         "name": "Patton Small",
    //         "gender": "male",
    //         "company": "Genmex"
    //     },
    //     {
    //         "name": "Lakisha Huber",
    //         "gender": "female",
    //         "company": "Insource"
    //     },
    //     {
    //         "name": "Lindsay Avery",
    //         "gender": "female",
    //         "company": "Unq"
    //     },
    //     {
    //         "name": "Ayers Hood",
    //         "gender": "male",
    //         "company": "Accuprint"
    //     },
    //     {
    //         "name": "Torres Durham",
    //         "gender": "male",
    //         "company": "Uplinx"
    //     },
    //     {
    //         "name": "Vincent Hernandez",
    //         "gender": "male",
    //         "company": "Talendula"
    //     },
    //     {
    //         "name": "Baird Ryan",
    //         "gender": "male",
    //         "company": "Aquasseur"
    //     },
    //     {
    //         "name": "Georgia Mercer",
    //         "gender": "female",
    //         "company": "Skyplex"
    //     },
    //     {
    //         "name": "Francesca Elliott",
    //         "gender": "female",
    //         "company": "Nspire"
    //     },
    //     {
    //         "name": "Lyons Peters",
    //         "gender": "male",
    //         "company": "Quinex"
    //     },
    //     {
    //         "name": "Kristi Brewer",
    //         "gender": "female",
    //         "company": "Oronoko"
    //     },
    //     {
    //         "name": "Tonya Bray",
    //         "gender": "female",
    //         "company": "Insuron"
    //     },
    //     {
    //         "name": "Valenzuela Huff",
    //         "gender": "male",
    //         "company": "Applideck"
    //     },
    //     {
    //         "name": "Tiffany Anderson",
    //         "gender": "female",
    //         "company": "Zanymax"
    //     },
    //     {
    //         "name": "Jerri King",
    //         "gender": "female",
    //         "company": "Eventex"
    //     },
    //     {
    //         "name": "Rocha Meadows",
    //         "gender": "male",
    //         "company": "Goko"
    //     },
    //     {
    //         "name": "Marcy Green",
    //         "gender": "female",
    //         "company": "Pharmex"
    //     },
    //     {
    //         "name": "Kirk Cross",
    //         "gender": "male",
    //         "company": "Portico"
    //     },
    //     {
    //         "name": "Hattie Mullen",
    //         "gender": "female",
    //         "company": "Zilencio"
    //     },
    //     {
    //         "name": "Deann Bridges",
    //         "gender": "female",
    //         "company": "Equitox"
    //     },
    //     {
    //         "name": "Chaney Roach",
    //         "gender": "male",
    //         "company": "Qualitern"
    //     },
    //     {
    //         "name": "Consuelo Dickson",
    //         "gender": "female",
    //         "company": "Poshome"
    //     },
    //     {
    //         "name": "Billie Rowe",
    //         "gender": "female",
    //         "company": "Cemention"
    //     },
    //     {
    //         "name": "Bean Donovan",
    //         "gender": "male",
    //         "company": "Mantro"
    //     },
    //     {
    //         "name": "Lancaster Patel",
    //         "gender": "male",
    //         "company": "Krog"
    //     },
    //     {
    //         "name": "Rosa Dyer",
    //         "gender": "female",
    //         "company": "Netility"
    //     },
    //     {
    //         "name": "Christine Compton",
    //         "gender": "female",
    //         "company": "Bleeko"
    //     },
    //     {
    //         "name": "Milagros Finch",
    //         "gender": "female",
    //         "company": "Handshake"
    //     },
    //     {
    //         "name": "Ericka Alvarado",
    //         "gender": "female",
    //         "company": "Lyrichord"
    //     },
    //     {
    //         "name": "Sylvia Sosa",
    //         "gender": "female",
    //         "company": "Circum"
    //     },
    //     {
    //         "name": "Humphrey Curtis",
    //         "gender": "male",
    //         "company": "Corepan"
    //     }
    //
}]);

myTCSApp.directive('luckyEmployee', [function(){

  return {
    restrict: 'E',
    scope: {
      employees: "=",
      title: "=",
    },
    templateUrl: 'views/lucky.html',
    transclude: true, //this property is used to make this tag allow external elements to be included inside the scope of this tag.
    replace: true, //using this property, in inspector window we can see a valid tg name instead of the name that we defined.
    controller: function($scope){
      $scope.lucky = Math.floor(Math.random() * 4);
    }
  };

}])

myTCSApp.controller('empDetailController',['$routeParams','$scope','$http', function($routeParams, $scope, $http){

    $scope.empid = $routeParams.id;


  $http.get('data/employees.json').then(function(response){
    $scope.employees = response.data;
  });

}]);

myTCSApp.controller('dataController',['$scope', '$http',  function($scope, $http){

    $scope.addEmployee = function () {
      $scope.employees.push({
        empid: parseInt($scope.newEmployee.empid),
        first_name: $scope.newEmployee.first_name,
        middle_name: '',
        last_name: $scope.newEmployee.last_name,
        last_project: $scope.newEmployee.last_project,
        designation: $scope.newEmployee.designation,
        available: true,
        experience: parseInt( $scope.newEmployee.experience),
        rating: parseFloat($scope.newEmployee.rating),

      });

      $scope.newEmployee.empid = "";
      $scope.newEmployee.first_name = "";
      $scope.newEmployee.last_name = "";
      $scope.newEmployee.last_project = "";
      $scope.newEmployee.designation = "";
      $scope.newEmployee.experience = "";
      $scope.newEmployee.rating = "";

    };



    $scope.removeEmployee = function(employee){
      var removedEmployee = $scope.employees.indexOf(employee);
      $scope.employees.splice(removedEmployee, 1);
    }

    $http.get('data/employees.json').then(function(response){
      $scope.employees = response.data;
    });
    // console.log(angular.toJson($scope.employees))
}]);
