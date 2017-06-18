var request;

function init_request(){
    request = {
        "name":document.getElementById("name").value,
        "userName":document.getElementById("usern").value,
        "email":document.getElementById("email").value,
        "password":document.getElementById("pass").value,
        "role":"Member"
    };

    console.log(request);
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
   $scope.submit= function(){
      var data = {
        "email": $scope.email,
        "name": $scope.name,
        "userName" : $scope.username,
        "password": $scope.password,
        "role":"Member"};
    console.log(5,data);
    $http.post("http://localhost:8080/api/auth/register",data).success(function(data, status) {
      console.log('User created successfully');
    });
   };
});