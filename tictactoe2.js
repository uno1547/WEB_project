document.addEventListener("DOMContentLoaded", function() {
    var each_button = document.querySelectorAll('.button div')
    for(q = 0; q < each_button.length; q++) {
        each_button[q].addEventListener("click", Whenclick)
    }
})

function Whenclick() {
    if(this.className == 'Blue') {
        var YourColor = 'Blue'
    } else {//누른 버튼이 레드
        var YourColor = 'Red'
    }
    var trash = document.querySelector('.button')
    trash.remove()
    clientturn(YourColor)
}

function clientturn(clientcolor) {
    var td = document.querySelectorAll('td');
    var sparecell = []
    for(x = 0; x < td.length; x++) {
        if(td[x].className != 'clicked') {
            sparecell.push(td[x])
            
        }else{
        //pass
        }
    }
    console.log(sparecell)
    if(clientcolor == 'Blue') {
        for(i=0; i<sparecell.length; i++) {
            sparecell[i].addEventListener("mouseover", blueshadowon)
            sparecell[i].addEventListener("mouseout", shadowoff)
            sparecell[i].addEventListener("click", blueput)
        }
    } else {
        for(i=0; i<sparecell.length; i++) {
            sparecell[i].addEventListener("mouseover", redshadowon)
            sparecell[i].addEventListener("mouseout", shadowoff)
            sparecell[i].addEventListener("click", redput)
            }
        }    
}

function blueshadowon() {
    if(this.className != 'clicked') {
        this.style.color = 'DeepSkyBlue'
        this.innerHTML = 'O'
    }else{
        //pass
    }
}

function redshadowon() {
    if(this.className != 'clicked') {
        this.style.color = 'salmon'
        this.innerHTML = 'X'
    }
}

function blueput() {
    if(this.className != 'clicked') {
        this.style.color = 'Blue'
        this.innerHTML = 'O'
        this.className = 'clicked'
        judge('AI', 'Red')
    }
}

function redput() {
    if(this.className != 'clicked') {
        this.style.color = 'Red'
        this.innerHTML = 'X'
        this.className = 'clicked'
        judge('AI', 'Blue')
    }
}

function shadowoff() {
    if(this.className != 'clicked') {
        this.innerHTML = ''
        this.style.color = ''
    }else{
        //pass
    }
}

function AIturn(AIcolor){
    var empty_list = []
    var cells = document.querySelectorAll('td')
    for(k = 0; k <9; k++) {
        ////console.log(cells[i])
        if(cells[k].textContent != '') {
            ////console.log(cells[k])
        } else {//나머지 안채워진칸들
            empty_list.push(cells[k])
        }
    }
    var randomcell = empty_list[Math.floor(Math.random()* empty_list.length)]
    if(AIcolor == 'Red') {
        randomcell.style.color = AIcolor
        randomcell.innerHTML = 'X'
        randomcell.className = 'clicked'
        judge('client', 'Blue')
    } else {
        randomcell.style.color = AIcolor
        randomcell.innerHTML = 'O'
        randomcell.className = 'clicked'
        judge('client', 'Red')
    }
}

function arraycontainsarray(target, wincase) {
    return wincase.every(function(value) {
        return(target.indexOf(value) >= 0)
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
    for(celnum = 0; celnum < totalcellnumber; celnum++) {
        if(currenttable[celnum].innerHTML == 'O') {
            orray.push(celnum)
        } else if (currenttable[celnum].innerHTML == 'X') {
            xrray.push(celnum)
        } else {
            emptylist.push(i)
        }
    }
    for(z = 0; z < winarray.length; z++) {//승부나는경우 판단
        var bluewin = arraycontainsarray(orray, winarray[z])
        var redwin = arraycontainsarray(xrray, winarray[z])
        //console.log(orray, winarray[z])
        //console.log(xrray, winarray[z])
        //console.log(bluewin, redwin)
        if(bluewin == true || redwin == true) {
            var status = 'gameover'
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
    }else if(status == 'draw') {
        draw()
    }else{
        nextturn(turn, color)
    }
}

function gameover(O, X) {
    var board = document.querySelector('.gamestatus')
    if(O.length > X.length){
        board.style.display = 'block'
        board.innerHTML = 'Bluewin'
    }else{
        board.style.display = 'block'
        board.innerHTML = 'Redwin'
    }
    var allcell = document.querySelectorAll('td')
    for(c = 0; c < allcell.length; c++){
        allcell[c].className = 'clicked'
    }
}

function draw() {
    var drawboard = document.querySelector('.gamestatus')
    drawboard.style.display = 'block'
    drawboard.innerHTML = 'Draw'
}

function nextturn(next, color){
    if(next == 'AI'){
        AIturn(color)
    }else{
        clientturn(color)
    }
}

