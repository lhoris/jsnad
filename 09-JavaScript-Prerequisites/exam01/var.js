// var 예제
console.log(x); // undefined (호이스팅)
var x = 5;

// 블록 스코프 예제
{
    let blockScoped = 'I am block scoped';
    var functionScoped = 'I am function scoped';
}
// console.log(blockScoped); // ReferenceError
console.log(functionScoped); // 'I am function scoped'