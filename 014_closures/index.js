let count = 0;

const add = (function(){
    if(count == 0){
        count++; // 1
    }
    return function(){
        count++;
        console.log(count);
    }
})();

add(); // 2
add(); // 3
add(); // 4