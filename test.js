console.log(num)
var num=10;
function varFor(){
    for(var num=0; num<3; ++num){
        console.log(num)
    }
}
function varFor2(){
    for(var i=0; i<4; ++i){
        setTimeout(()=> console.log(i),0);
    }
}
function letFor(){
    for(let i=0; i<4; ++i){
        setTimeout(()=> console.log(i),0);
    }
}

letFor();
varFor2();

var f = function () {
    console.log("function 1");
    console.log("f3 : ", f3); // 2번
  };
  
  f(); // 3번
  var f3 = () => console.log("function 3");  