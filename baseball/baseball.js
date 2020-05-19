
var answer = new Array();
var trial = 0;

var newGameBtn = document.getElementById("newBtn");
var throwBtn = document.getElementById("throw");

function newGame(){
	answer[0]=Math.floor(Math.random()*10);
	do{
		answer[1]=Math.floor(Math.random()*10);
	}while(answer[0]==answer[1]);
	do{
		answer[2]=Math.floor(Math.random()*10);
	}while(answer[0]==answer[2] || answer[1]==answer[2]);
	
	trial = 0;
	
	
	//정답 확인용 코드
	//document.getElementById("answer").innerHTML = answer;
	document.getElementById("tryN").innerHTML = trial;
	document.getElementById("yourBall").innerHTML = '';
	document.getElementById("result").innerHTML = '';
	document.getElementById("hint").innerHTML = '';


	//던지기 버튼 활성화
	throwBtn.disabled = false;

	document.getElementById("test").disabled = false; //숫자 입력창 활성화

	//힌트 창 감추기
	document.getElementById("hint").hidden = true;
}

function judge(){

	
	var test=document.getElementById('test').value;
	var testArray=new Array();
	document.getElementById('test').value = '';//텍스트 입력 칸 비우기
	for(i=0; i<test.length; i++){
		testArray[i]=parseInt(test.substring(i,i+1));
	}
	
	var ball = 0;
	var strike = 0;
	var result = "";
	var i=0, j=0;
	for(i=0; i<answer.length; i++){
		for(j=0; j<testArray.length; j++){
			if(answer[i]==testArray[j]&&i==j){
				strike++;
			}else if(answer[i]==testArray[j]){
				ball++;
			}
		}
		
	}
	
	result = ball+"B "+strike+"S";
	
	//정답 맞혔을때
	if(3==strike){
		result = "3 Strikes OUT!";
		throwBtn.disabled = true; //던지기 버튼 비활성화
		document.getElementById("test").disabled = true; //숫자 입력창 비활성화
	}
	
	trial++;
	
	document.getElementById("yourBall").innerHTML = testArray;
	document.getElementById("result").innerHTML = result;
	document.getElementById("tryN").innerHTML = trial;

	//정답 확인용 치트키
	if('777'==test){
		document.getElementById("answer").innerHTML = "정답은 "+ answer;
		throwBtn.disabled = true; //던지기 버튼 비활성화
		document.getElementById("test").disabled = true; //숫자 입력창 비활성화

		document.getElementById("result").innerHTML = "포기";
		document.getElementById("yourBall").innerHTML = "";
	}

	

	//hint에 기록 저장
	document.getElementById("hint").innerHTML += testArray + "  &nbsp; &nbsp;" + result + "</br>";

	//hint 버튼 활성화
	document.getElementById("hintBtn").disabled = false;

	

}

//엔터로 공 던지기
document.getElementById("test").addEventListener("keyup", function(event){
	if(event.keyCode === 13) {
		event.preventDefault();
		throwBtn.click();
	}
})

function showHint(){

	document.getElementById("hint").hidden = false;

}