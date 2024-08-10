// 블록 스코프 예제
{
    let blockScoped = 'I am block scoped';
    var functionScoped = 'I am function scoped';
}

console.log(functionScoped); // 'I am function scoped'




console.log(blockScoped); // ReferenceError

