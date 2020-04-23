document.addEventListener("DOMContentLoaded", function() {//페이지로드후에 OX버튼에 이벤트리스너(Whenclick)등록
    var each_button = document.querySelectorAll('.button div')
    for(q = 0; q < each_button.length; q++) {
        each_button[q].addEventListener("click", Whenclick)
    }
})


function Whenclick() {//Whenclick 함수 gamestart 실행
    if(this.className == 'Blue') {//누른버튼이 블루
        var yourColor = 'Blue'
        var AIcolor = 'Red'                                //랜덤으로 두기
    } else {//누른 버튼이 레드
        var YourColor = 'Red'
        var AIcolor = 'Blue'
    }
    var trash = document.querySelector('.button')
    trash.remove()
    game(yourColor, AIcolor)
}


function whetherput(TF, aicolor) {
    //console.log('emptycellready')                              /////111111111111111111111111111111
    var empty_list = []
    if(TF == true) {//put이 true=> emptycell만듬
        //console.log('True!!')                                       ////////222222222222222222222
        var cells = document.querySelectorAll('td')
        for(k = 0; k <9; k++) {
            //console.log(cells[i])
            if(cells[k].textContent != '') {//만약 채워진칸이다 
                //console.log(cells[k])
            } else {//나머지 안채워진칸들
                empty_list.push(cells[k])
            }
        }
        //console.log(empty_list)                                    //////333333333333333
    } else {
        //pass
    }
    AI(aicolor, empty_list)
}
function judge(x) {//ai 에서 judge(currenttable받음)
    //console.log('hi')
    var winarray = [
        [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]
    ]
    var orray = []
    var xrray = []
    var cellslength = x.length
    //console.log(cellslength)
    for(celnum=0; celnum<cellslength; celnum++) {
        if(x[celnum].innerHTML == 'O') {
            //console.log(celnum)
            orray.push(celnum)
            orray.sort(function(a, b){
                return a - b
            })
        } else if (x[celnum].innerHTML == 'X') {
            //console.log(celnum)
            xrray.push(celnum)
            xrray.sort(function(c, d){
                return c - d
            })
        } else {
            //pass
        }//Orray랑Xrray에 셀번호 넣음
    }//채워져있는칸index 추출
    for(cases = 0; cases<8; cases++){//wincase 8가지 경우 읽으면서 orray와xrray비교 포함관계 있으면 true로 var ~~win에 저장
        var orraywin = arraycontainsarray(orray, winarray[cases])
        var xrraywin = arraycontainsarray(xrray, winarray[cases])
        if(orraywin == true || xrraywin == true){//승부가남
            gameover(orray, xrray)
        }else{
            
        }
    }
    console.log(orray)
    console.log(xrray)
}
function gameover(O, X) {
    if(O.length > X.length){
        var result = document.querySelector('.gameover')
        result.style.display = 'block'
        result.innerHTML = 'Bluewin'
    }else{
        result.style.display = 'block'
        result.innerHTML = 'Redwin'
    }
}
function arraycontainsarray(target, wincase){
    return wincase.every(function(value){
        return target.indexOf(value) >= 0;
    })
}
function AI(aicl, box) {
    //console.log('AIcoloris'+aicl)
    var randomcell = box[Math.floor(Math.random()* box.length)]
    //console.log(randomcell)
    //console.log('yourrandomcell')
    if(aicl == 'Red') {
        randomcell.style.color = aicl
        randomcell.innerHTML = 'X'
    } else {
        randomcell.style.color = aicl
        randomcell.innerHTML = 'O'
    }
    var currenttable = document.querySelectorAll('td')
    //console.log(currenttable)
    judge(currenttable)
}


function game(cl, aicl) {//옌그냥 이벤트 리스너등록까지만하고끝 등록했던 redblueput에서 whetherput 중복추가
    var td = document.querySelectorAll('td');
    click = false
    if(cl == 'Blue') {
        for(i=0; i<td.length; i++) {
            td[i].addEventListener("mouseover", blueshadowon)
            td[i].addEventListener("mouseout", shadowoff)
            td[i].addEventListener("click", blueput)
        }
    } else {
        for(i=0; i<td.length; i++) {
            td[i].addEventListener("mouseover", redshadowon)
            td[i].addEventListener("mouseout", shadowoff)
            td[i].addEventListener("click", redput)
            }
        }    
}


function blueshadowon() {
    if(click == false) {
    this.style.color = 'DeepSkyBlue'
    this.innerHTML = 'O'
    } else {
        //pass
    }
}


function redshadowon() {
    if(click == false) {
    this.style.color = 'Salmon'
    this.innerHTML = 'X'
    } else {
        //pass
    }
}


function blueput() {
    if(click == false) {
        this.style.color = 'Blue'
        this.innerHTML = 'O'
        click = true
        var whetherclick = true
        whetherput(whetherclick, 'Red')//안됨
        console.log('blueput')                                      //////////444444444444444
    } else {
        //pass
    }
}


function redput() {
    if(click == false) {//클릭하면?
        this.style.color = 'Red'
        this.innerHTML = 'X'
        click = true
        var whetherclick = true
        whetherput(whetherclick, 'Blue')
        console.log('redput')
    } else {
        //pass
    }
}


function shadowoff() {
    if(click == false) {
        this.innerHTML = ''
        this.style.color = ''
    } else {
        //pass
    }
}