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


function whetherput(TF,aicolor){
    console.log('emptycellready')                              /////111111111111111111111111111111
    var empty_list = []
    if(TF == true){//put이 true=> emptycell만듬
        console.log('True!!')                                       ////////222222222222222222222
        var cells = document.querySelectorAll('td')
        for(i=0;i<9;i++){
            console.log(cells[i])
            if(cells[i].textContent !=''){//만약 채워진칸이다 여기 고쳐야함
                console.log(cells[i])
            }else{//나머지 안채워진칸들
                empty_list.push(cells[i])
            }
        }
        console.log(empty_list)                                    //////333333333333333
    }else{
        //pass
    }
    AI(aicolor,empty_list)
}


function gamestart(x,y){//색깔받고 게임스타트
    for(i=0;i<3;i++){
        console.log('level'+i)
        game(x,y)
    }
}


function AI(aicl,box){
    console.log('AIcoloris'+aicl)
    var randomcell = box[Math.floor(Math.random()* box.length)]
    console.log(randomcell)
    console.log('yourrandomcell')
    if(aicl == 'Red'){
        randomcell.style.color = aicl
        randomcell.innerHTML = 'X'
    }else{
        randomcell.style.color = aicl
        randomcell.innerHTML = 'O'
    }
}


function game(cl,aicl){//옌그냥 이벤트 리스너등록까지만하고끝 등록했던 redblueput에서 whetherput
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
        whetherput(whetherclick,'Red')//안됨
        console.log('blueput')                                      //////////444444444444444
    }else{
        //pass
    }
}


function redput(){
    if(click == false){//클릭하면?
        this.style.color ='Red'
        this.innerHTML = 'X'
        click = true
        var whetherclick = true
        whetherput(whetherclick,'Blue')
        console.log('redput')
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