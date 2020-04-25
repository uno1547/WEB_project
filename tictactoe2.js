document.addEventListener("DOMContentLoaded", function() {
    var each_button = document.querySelectorAll('.button div')
    for(q = 0; q < each_button.length; q++) {
        each_button[q].addEventListener("click", Whenclick)
    }
})

function Whenclick() {//Whenclick 함수 gamestart 실행
    if(this.className == 'Blue') {//누른버튼이 블루
        var YourColor = 'Blue'
        //var AIcolor = 'Red'                                //랜덤으로 두기
    } else {//누른 버튼이 레드
        var YourColor = 'Red'
        //var AIcolor = 'Blue'
    }
    var trash = document.querySelector('.button')
    trash.remove()
    clientturn(YourColor)
}

function clientturn(clientcolor) {
    console.log('client turn!') //옌그냥 이벤트 리스너등록까지만하고끝 등록했던 redblueput에서 whetherput 중복추가
    var td = document.querySelectorAll('td');
    click = false
    if(clientcolor == 'Blue') {
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
        judge('AI', 'Red')//안됨
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
        judge('AI', 'Blue')
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

function AIturn(AIcolor){
    console.log('ai turn!')
    var empty_list = []
    var cells = document.querySelectorAll('td')
    for(k = 0; k <9; k++) {
        //console.log(cells[i])
        if(cells[k].textContent != '') {//만약 채워진칸이다 
            //console.log(cells[k])
        } else {//나머지 안채워진칸들
            empty_list.push(cells[k])
        }
    }
    var randomcell = empty_list[Math.floor(Math.random()* empty_list.length)]
    //console.log(randomcell)
    //console.log('yourrandomcell')
    if(AIcolor == 'Red') {
        randomcell.style.color = AIcolor
        randomcell.innerHTML = 'X'
        judge('client', 'Blue')
    } else {
        randomcell.style.color = AIcolor
        randomcell.innerHTML = 'O'
        judge('client', 'Red')
    }
    
}

function arraycontainsarray(target, wincase) {
    return wincase.every(function(value) {
        target.indexOf(value) >= 0
    })
}

function judge(turn, color) {
    var currenttable = document.querySelectorAll('td')
    var totalcellnumber = currenttable.length
    var winarray = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    var orray = []
    var xrray = []
    var emptylist = []
    //console.log(totalcellnumber)
    for(celnum = 0; celnum < totalcellnumber; celnum++) {
        if(currenttable[celnum].innerHTML == 'O') {
            //console.log(celnum)
            orray.push(celnum)
        } else if (currenttable[celnum].innerHTML == 'X') {
            //console.log(celnum)
            xrray.push(celnum)
        } else {
            emptylist.push(i)
        }
    }//셀별로 분류
    console.log(orray)
    console.log(xrray)
    for(i = 0; i < winarray.length; i++) {//승부나는경우 판단
        var bluewin = arraycontainsarray(orray, winarray[i])
        var redwin = arraycontainsarray(xrray, winarray[i])
        if(bluewin == true || redwin == true) {
            var status = 'gameover'
            console.log('gameover')
        }else{
            //pass
        }
    }
    if(xrray.length + orray.length == 9){
        var status = 'draw'
    }else{
        //pass
    }

    if(status == 'gameover') {
        gameover(orray, xrray)
        console.log('status gameover')
    }else if(status == 'draw'){
        draw()
        console.log('status draw')
    }else{
        nextturn(turn, color)
        console.log('nextturn!!!')
    }
}

function gameover(O, X){
    var board = document.querySelector('.gamestatus')
    if(O.length > X.length){
        board.style.display = 'block'
        board.innerHTML = 'Bluewin'
    }else{
        board.style.display = 'block'
        board.innerHTML = 'Redwin'
    }
}

function draw(){
    var drawboard = document.querySelector('.gamestatus')
    drawboard.style.display = 'block'
    drawboard.innerHTML = 'Draw'
}

function nextturn(currentturn, color){
    if(currentturn == 'AI'){
        AIturn(color)
    }else{
        clientturn(color)
    }
}

/*xrray.sort(function(c, d){
   굳이 필요없을듯 포함관계여서 첨자들이 양수라는것만중요순서는상관 없음             
})
*/