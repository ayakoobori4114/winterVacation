let numOne = " ";
let numTwo = " ";
let operator = " ";

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//고차함수, 고계함수 (higher order function)
//함수의 반환값의 데이터형(자료형)이 함수형인 함수  를 고차함수라고 함.
//함수공장
// const func = ()=>{ return ()=>{console.log("안쪽함수");}; };  func가 고차함수임.
// const infunc = func();
// === const infunc = ()=>{console.log("안쪽함수");};
// infunc();
// const infunc1 = func();

const onClickNumBtn = (num)=>(event) =>{
    if(operator){
        numTwo += num;
    } else {
        numOne += num;
    }
    $result.value += num;
};

document.querySelector('#num-0').addEventListener('click', () => {});//callback함수
document.querySelector('#num-1').addEventListener('click', () => {});
document.querySelector('#num-2').addEventListener('click', () => {});
document.querySelector('#num-3').addEventListener('click', () => {});
document.querySelector('#num-4').addEventListener('click', () => {});
document.querySelector('#num-5').addEventListener('click', () => {});
document.querySelector('#num-6').addEventListener('click', () => {});
document.querySelector('#num-7').addEventListener('click', () => {});
document.querySelector('#num-8').addEventListener('click', () => {});
document.querySelector('#num-9').addEventListener('click', () => {});
