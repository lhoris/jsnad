// 클로저 예제 1
function outer() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2