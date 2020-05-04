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
function cellstyle(color, cell) {
    if(color == 'Red') {
        cell.style.color = color
        cell.innerHTML = 'X'
        cell.className = 'clicked'
    } else {
        cell.style.color = color
        cell.innerHTML = 'O'
        cell.className = 'clicked'
    }
}

/*function whatisexclude(a, b) {
    var need = []
    for(var i = 0; i < b.length; i++) {
        if(a.includes[b[i]]) {
            //pass
        } else {
            need.push(b[i])
        }
    }
    console.log(need)
    return need
}
*/

function howmanyinclude(a, b) {//[0,6],[0,3,6]//clientcell과 wincas비교하면서 몇개가겹치는지 뭐가 남는지 돌려주는함수
    howmany = 0
    emptynum = 0
    need = []
    for(var i = 0; i < a.length; i++) {
        var isin = b.includes(a[i])//b ex)[0,3,6]에 0,3,6 각각이 몇개들어있는지+ 어떤게  
        if(isin == true) {
            howmany += 1
        } else {
            //emptynum += a[i]
        }
    }
    if(howmany == 2) {
        for(var i = 0; i < b.length; i++) {
            if(a.includes(b[i])) {
                //pass
            } else {
                need.push(b[i])
            }
        }
    }
    return need
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
    var wheretoattack = []
    if(AIcolor == 'Red') {//clientcell과 mycell분류 cell 번호 추출
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
        var randomcornercell = cornercells[Math.floor(Math.random()*cornercells.length)]
        if((clientcell[0] == 0 || clientcell[0] == 2 || clientcell[0] == 6 || clientcell[0] == 8) && AIcolor == 'Red') {
            cellstyle(AIcolor, cells[4])//0,2,6,8이후 4에 놓음
            judge('client', 'Blue')
        } else if((clientcell[0] == 0 || clientcell[0] == 2 || clientcell[0] == 6 || clientcell[0] == 8) && AIcolor == 'Blue') {
            cellstyle(AIcolor, cells[4])//색깔
            judge('client', 'Red')
        } else if((clientcell[0] == 4) && AIcolor == 'Red') {
            cellstyle(AIcolor, randomcornercell)//가운데선일때 이후 0,2,6,8 중두게
            judge('client', 'Blue')
        } else if((clientcell[0] == 4) && AIcolor == 'Blue') {//1,3,5,7때 이후 02/06/68/28
            cellstyle(AIcolor, randomcornercell)
            judge('client', 'Red')//얘 없어도 자동으로 clientturn으로 바뀌는것같은느낌 왠지 아직은 모르겠음
        } else if(clientcell[0] == 1 && AIcolor == 'Red') {
            var corner02cells = [cells[0], cells[2]]
            var randomcorner02cell = corner02cells[Math.floor(Math.random()*corner02cells.length)]
            cellstyle(AIcolor, randomcorner06cell)
            judge('client', 'Blue')
        } else if(clientcell[0] == 1 && AIcolor == 'Blue') {
            var corner02cells = [cells[0], cells[2]]
            var randomcorner02cell = corner02cells[Math.floor(Math.random()*corner02cells.length)]
            cellstyle(AIcolor, randomcorner02cell)
            judge('client', 'Red')
        } else if(clientcell[0] == 3 && AIcolor == 'Red') {
            var corner06cells = [cells[0], cells[6]]
            var randomcorner06cell = corner06cells[Math.floor(Math.random()*corner06cells.length)]
            cellstyle(AIcolor, randomcorner06cell)
            judge('client', 'Blue')
        } else if(clientcell[0] == 3 && AIcolor == 'Blue') {
            var corner06cells = [cells[0], cells[6]]
            var randomcorner06cell = corner06cells[Math.floor(Math.random()*corner06cells.length)]
            cellstyle(AIcolor, randomcorner06cell)
            judge('client', 'Red')
        } else if(clientcell[0] == 7 && AIcolor == 'Red') {
            var corner68cells = [cells[6], cells[8]]
            var randomcorner68cell = corner68cells[Math.floor(Math.random()*corner68cells.length)]
            cellstyle(AIcolor, randomcorner68cell)
            judge('client', 'Blue')
        } else if(clientcell[0] == 7 && AIcolor == 'Blue') {
            var corner68cells = [cells[6], cells[8]]
            var randomcorner68cell = corner68cells[Math.floor(Math.random()*corner68cells.length)]
            cellstyle(AIcolor, randomcorner68cell)
            judge('client', 'Red')
        }  else if(clientcell[0] == 5 && AIcolor == 'Red') {
            var corner28cells = [cells[2], cells[8]]
            var randomcorner28cell = corner28cells[Math.floor(Math.random()*corner28cells.length)]
            cellstyle(AIcolor, randomcorner28cell)
            judge('client', 'Blue')
        }  else if(clientcell[0] == 5 && AIcolor == 'Blue') {
            var corner28cells = [cells[2], cells[8]]
            var randomcorner28cell = corner28cells[Math.floor(Math.random()*corner28cells.length)]
            cellstyle(AIcolor, randomcorner28cell)
            judge('client', 'Red')
        } else {
            //pass
        }
    } else {//아니면 else if 이후 상대 2번이상둔경우
        for(var i = 0; i < winarray.length; i++) {//승리케이스 읽으면서 현재 clientcell이 몇개 포함하고있는지 막을수는있게만듬
            cases = howmanyinclude(clientcell, winarray[i])//ex)
            console.log(clientcell, winarray[i])
            console.log(cases)
            if(cases.length != 0) {
                wheretodefense.push(cases[0])
                console.log(wheretodefense)
            }    
        }
        cellstyle(AIcolor,cells[wheretodefense[0]])
        if(AIcolor == 'Red') {
            judge('client', 'Blue')
        } else {
            judge('client', 'Red')
        }
    }
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

