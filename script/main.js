var app = angular.module("memoryGameApp", []);
app.controller("memoryGameCtrl", function($scope) {
    $scope.letters = [];
    $scope.ans = [];
    $scope.row = 4;
    $scope.coloum = 4;
    $scope.totalElement = $scope.row * $scope.coloum;
    $scope.letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z"];
    for (var i = 0; i < ($scope.totalElement); i = i + 2) {
        temp = {
            "id": i,
            "name": $scope.letter[Math.floor(Math.random() * 25)],
            "fliped": false
        }
        temp1 = {
            "id": i + 1,
            "name": temp.name,
            "fliped": false
        }
        $scope.letters.push(temp, temp1);
    }
    $scope.check = function(ro, index) {
        temp2 = {
            "choice": ro,
            "index": index
        }
        $scope.ans.push(temp2);
        ro.fliped = true;
        console.log($scope.ans[0].choice.name);
        if (($scope.ans.length > 1) && ($scope.ans[0].choice.name == $scope.ans[1].choice.name)) {
            console.log($scope.letters[$scope.ans[0].index]);
            $scope.letters[$scope.ans[0].index].fliped = true;
            $scope.letters[$scope.ans[1].index].fliped = true;

            $scope.ans = [];
            console.log(ro, "b", index);
        } else if (($scope.ans.length > 1) && ($scope.ans[0].choice.name != $scope.ans[1].choice.name)) {
            $scope.letters[$scope.ans[0].index].fliped = false;
            console.log('test');
            console.log($scope.letters[$scope.ans[0].index].fliped);
            $scope.letters[$scope.ans[1].index].fliped = false;
            $scope.ans = [];
        }
    }
});