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
            
        } else {
        //pass
        }
    }
    
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
    } else {
        //pass
    }
}

function redshadowon() {
    if(this.className != 'clicked') {
        this.style.color = 'salmon'
        this.innerHTML = 'X'
    } else {
        //pass
    }
}

function blueput() {
    if(this.className != 'clicked') {
        this.style.color = 'Blue'
        this.innerHTML = 'O'
        this.className = 'clicked'
        judge('AI', 'Red')
    } else {
        //pass
    }
}

function redput() {
    if(this.className != 'clicked') {
        this.style.color = 'Red'
        this.innerHTML = 'X'
        this.className = 'clicked'
        judge('AI', 'Blue')
    } else {

    }
}

function shadowoff() {
    if(this.className != 'clicked') {
        this.innerHTML = ''
        this.style.color = ''
    } else {
        //pass
    }
}


function AIturn(AIcolor) {
    var winarray = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    var empty_cell = []
    var clientcell = []
    var mycell = []
    var cells = document.querySelectorAll('td')
    var wheretodefense = []
    var wheret
    if(AIcolor == 'Red') {
        for(var i = 0; i < cells.length; i++) {
            if(cells[i].innerHTML == 'O') {
                clientcell.push(i)
            } else if(cells[i].innerHTML == 'X') {
                mycell.push(i)
            } else {
                empty_cell.push(cells[i])
            }
        }
        console.log(clientcell)
        console.log(mycell)
        console.log(empty_cell)
    } else {//ai가 blue client가 red
        for(var i = 0; i < cells.length; i++) {
            if(cells[i].innerHTML == 'X') {
                clientcell.push(i)
            } else if(cells[i].innerHTML == 'O') {
                mycell.push(i)
            } else {
                empty_cell.push(cells[i])
            }
        }
        console.log(clientcell)
        console.log(mycell)
        console.log(empty_cell)
    }
    if(clientcell.length == 1) {
        var cornercells = [cells[0], cells[2], cells[6], cells[8]]
        var randomcellnum = cornercells[Math.floor(Math.random()*cornercells.length)]
        console.log(randomcellnum)
        if((clientcell[0] == 0 || clientcell[0] == 1 || clientcell[0] == 2 || clientcell[0] == 3 || clientcell[0] == 5 || clientcell[0] == 6 || clientcell[0] == 7 || clientcell[0] == 8) && AIcolor == 'Red') {
            cells[4].style.color = AIcolor
            cells[4].innerHTML = 'X'
            cells[4].className = 'clicked'
            judge('client', 'Blue')
        } else if((clientcell[0] == 0 || clientcell[0] == 1 || clientcell[0] == 2 || clientcell[0] == 3 || clientcell[0] == 5 || clientcell[0] == 6 || clientcell[0] == 7 || clientcell[0] == 8) && AIcolor == 'Blue') {
            cells[4].style.color = AIcolor
            cells[4].innerHTML = 'O'
            cells[4].className = 'clicked'
            judge('client', 'Red')
        } else if((clientcell[0] == 4) && AIcolor == 'Red') {
            randomcellnum.style.color = AIcolor
            randomcellnum.innerHTML = 'X'
            randomcellnum.className = 'clicked'
            judge('client', 'Blue')
        } else if((clientcell[0] == 4) && AIcolor == 'Blue') {
            randomcellnum.style.color = AIcolor
            randomcellnum.innerHTML = 'O'
            randomcellnum.className = 'clicked'
            judge('client', 'Red')//얘 없어도 자동으로 clientturn으로 바뀌는것같은느낌 왠지 아직은 모르겠음
        } else {
            //pass
        }
    } else {//아니면 else if
        for(var i = 0; i < winarray.length; i++) {
            cases = howmanyinclude(clientcell, winarray[i])
            console.log(clientcell, winarray[i])
            console.log(cases)     
            if(cases == 2) {
                wheretodefense.push(i)
            }else if(cases == 1){

            }else
        }
    }
    var winarray = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]


function howmanyinclude(a, b) {
    howmany = 0
    for(var i = 0; i < a.length; i++) {
        var isin = b.includes(a[i])//b ex)[0,3,6]에 0,3,6 각각이 몇개들어있는지+ 어떤게  
        if(isin == true) {
            howmany += 1
        } else {
            //pass
        }
    }
    return /*'the number of included element is '*/ howmany
}
/*    for(var cell=0; cell < cells.length; cell++) {
        if(AIcolor == 'Red' && cells[cell].innerHTML == 'O') {
            clientcell.push(cell)
        } else if(cells[cell].innerHTML == 'X') {
            mycell.push(cell)
        } else {
            empty_list.push(cells[cell])
        }
    }
*/  

    
/*    var randomcell = empty_cell[ Math.floor(Math.random()* empty_cell.length) ]
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
*/
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
        } else {
            //pass
        }
    }
    if(status != 'gameover' && xrray.length + orray.length == 9) {
        var status = 'draw'
    } else {
        //pass
    }

    if(status == 'gameover') {
        gameover(orray, xrray)
    } else if (status == 'draw') {
        draw()
    } else {
        nextturn(turn, color)
    }
}

function gameover(O, X) {
    var board = document.querySelector('.gamestatus')
    if(O.length > X.length) {
        board.style.display = 'block'
        board.innerHTML = 'Blue win'
    } else {
        board.style.display = 'block'
        board.innerHTML = 'Red win'
    }
    var allcell = document.querySelectorAll('td')
    for(c = 0; c < allcell.length; c++) {
        allcell[c].className = 'clicked'
    }
}

function draw() {
    var drawboard = document.querySelector('.gamestatus')
    drawboard.style.display = 'block'
    drawboard.innerHTML = 'Draw'
}

function nextturn(next, color) {
    if(next == 'AI') {
        AIturn(color)
    } else {
        clientturn(color)
    }
}

