let target = document.querySelector("#dynamic")


function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringARR = selectString.split("");
    return selectStringARR;
}

//리셋타이핑
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80)
    }else{
        setTimeout(resetTyping,900)
    }
}
dynamic(randomString());
console.log(selectString); //이거 에러나는에 왜인지 모름
console.log(selectStringARR);

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active")
}
setInterval(blink, 500)

