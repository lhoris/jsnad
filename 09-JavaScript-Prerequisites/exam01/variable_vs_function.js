console.log(hoisting()); // 'This is hoisted!!!'
console.log(declaration()); // Uncaught TypeError: declaration is not a function
 
function hoisting() {
    return 'This is hoisted!!!';
}
 
var declaration = function noHoisting() {
    return 'JavaScript only hoists declarations, not initializations';
}


// 함수선언은 호이스팅되지만 변수의 경우 선언만 호이스트하고 초기화는 호이스트 하지 않습니다.