const arr = [1,2,3,4,5,6,7,8,9,11,13,15,17,19];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 10){
        document.write(`${arr[i]}, `);
    }
}
// for문 중첩하기
// for문안에 또 다른 for문을 사용하는 것을 중첩한다고 한다
// ex) *이 30개 표시되는 줄을 5개 만드려면?

// for(let k=0; k<5; k++){
//     for(var i=0; i<30; i++)
//     {
//         document.write('*');
//     }
//     document.write('<br>'); // 줄바꿈
// }
// 1. 바깥쪽 for문 실행 (k=0)
// 2. 안쪽 for문을 실행해 30번 반복 후 빠져나온다
// 3. <br> 태그를 추가해서 줄을 바꾼다
// 4. 바깥쪽 for문의 조건식이 false가 될 때까지 반복한다