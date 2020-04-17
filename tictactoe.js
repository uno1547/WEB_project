document.addEventListener("DOMContentLoaded",function(){//페이지로드후에 OX버튼에 이벤트리스너(whenclick)등록
    var each_button = document.querySelectorAll('.button div')
    for(i=0;i<each_button.length;i++){
        each_button[i].addEventListener("click",whenclick)
    }
})
function whenclick(){//whenclick 함수 gamestart 실행
    if(this.className =='Blue'){//누른버튼이 블루
        var yourColor = 'Blue'
        var AIcolor = 'Red'                                //랜덤으로 두기
    }else{//누른 버튼이 레드
        var yourColor = 'Red'
        var AIcolor = 'Blue'
    }
    var trash = document.querySelector('.button')
    trash.remove()
    gamestart(yourColor,AIcolor)
}
/*function whetherput(){///////////////////////////////////
    whetherclicked = true////////////////////////////
    console.log(whetherclicked)//////////////////
    console.log('clicked')
    ////////////////////////
}*/
function whetherput(TF){
    console.log('emptycellready')
    var empty_list = []
    if(TF == true){
        console.log('True!!')
        var cells = document.querySelectorAll('td')
        for(i=0;i<9;i++){
            console.log(cells[i])
            if(cells[i].textContent == 'O'){//만약 채워진칸이다
                console.log(cells[i])
            }else{//나머지 안채워진칸들
                empty_list.push(cells[i])
            }
        }
        console.log(empty_list)
    }else{
        //pass
    }
}
function gamestart(x,y){//색깔받고 게임스타트
    client(x,y)
    /*if(whetherclicked == true){
        console.log('clicked')
    }else{
        console.log()
    }*/   
}
function AI(aicl){
    console.log('AIcoloris'+aicl)
}
function GetEmptyCell(){
    cells = document.querySelectorAll('td')

}
function client(cl,aicl){//옌그냥 이벤트 리스너등록까지만하고끝
    var td = document.querySelectorAll('td');
    click = false
    if(cl == 'Blue'){
        for(i=0;i<td.length;i++){
            td[i].addEventListener("mouseover",blueshadowon)
            td[i].addEventListener("mouseout",shadowoff)
            td[i].addEventListener("click",blueput)
        }
    }else{
        for(i=0;i<td.length;i++){
            td[i].addEventListener("mouseover",redshadowon)
            td[i].addEventListener("mouseout",shadowoff)
            td[i].addEventListener("click",redput)
            }
        }    
    /*if(clicked){
        AI(aicl)
    }*/
}
function blueshadowon(){
    if(click == false){
    this.style.color = 'DeepSkyBlue'
    this.innerHTML = 'O'
    }else{
        //pass
    }
}
function redshadowon(){
    if(click == false){
    this.style.color = 'Salmon'
    this.innerHTML = 'X'
    }else{
        //pass
    }
}
function blueput(){
    if(click == false){
        this.style.color = 'Blue'
        this.innerHTML = 'O'
        click = true
        var whetherclick = true
        console.log(whetherclick)//true 출력 근데 왜 wheterput에 true가전달이안돼ㅠㅠㅠㅠㅠ
        whetherput(whetherclick)//안됨
        console.log('blueput')
        AI('Red')//////////
        
        /*if(this.length == 0 ){
            console.log('it says 0')
        }else{
            console.log('it says no 0')
            a = this.length
            target = document.querySelector('.box')
            target.innerHTML = a
        }
        */
    }else{
        //pass
    }

}
function redput(){
    if(click == false){//클릭하면?
        this.style.color ='Red'
        this.innerHTML = 'X'
        click = true
        whetherput()
        console.log('redput')
        AI('Blue')//////////
    }else{
        //pass
    }

}
function shadowoff(){
    if(click == false){
        this.innerHTML = ''
        this.style.color = ''
    }else{
        //pass
    }
}