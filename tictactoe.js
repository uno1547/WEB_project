document.addEventListener("DOMContentLoaded",function(){//페이지로드후에 OX버튼에 이벤트리스너(whenclick)등록
    var each_button = document.querySelectorAll('.button div')
    for(i=0;i<each_button.length;i++){
        each_button[i].addEventListener("click",whenclick)
    }
})
function whenclick(){//whenclick 함수
    if(this.className=='Blue'){
        var yourColor = 'Blue'
        var AIcolor = 'Red'
    }else{
        var yourColor = 'Red'
        var AIcolor = 'Blue'
    }
    var trash = document.querySelector('.button')
    var TF = true
    trash.remove()
    console.log(yourColor)
    console.log(AIcolor)
    gamestart(yourColor,AIcolor,TF)
}
function gamestart(x,y,z){
    if(x=='Blue' && z == true){
            client(x)
            //AI(y)
            //judge()
    }else{
        client(x)
        //AI(y)
        //judge()
        }
    }
helloguys
function client(cl){//클라이언트 
    var click = false
    var td = document.querySelectorAll('td')
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
function AI(cl){
    
    
}
function blueshadowon(){
    if(click == false){
    this.style.color = 'DeepSkyBlue'
    this.innerHTML = 'O'
    }else{
        //pass
    }
}
function blueput(){
    this.style.color = 'Blue'
    this.innerHTML = 'O'
    click = true
}
function redshadowon(){
    if(click == false){
    this.style.color = 'Salmon'
    this.innerHTML = 'X'
    }else{
        //pass
    }
}
function redput(){
    this.style.color ='Red'
    this.innerHTML = 'X'
    click= true
}
function shadowoff(){
    if(click == false){
        this.innerHTML = ''
    }else{
        //pass
    }
}
/*function shadowon(x){
    if(x=='Blue'){
        this.style.color = 'DeepSkyBlue'
        this.innerHTML = 'O'
    }else{
        this.style.color = 'Salmon'
        this.innerHTML = 'X'
    }
}
function put(x){
    if(x=='Blue'){
        this.style.color = x
        this.innerHTML = 'O'
    }else{
        this.style.color = x
        this.innerHTML = 'X'
    }
}
*/
/*
function blueshadowon(){
    if(click == false){
    this.style.color = 'DeepSkyBlue'
    this.innerHTML = 'O'
    }else{
        //pass
    }
}
function blueput(){
    this.style.color = 'Blue'
    this.innerHTML = 'O'
    click = true
}
function redshadowon(){
    if(click==false){
    this.style.color = 'Salmon'
    this.innerHTML = 'X'
    }else{
        //pass
    }
}
function redput(){
    this.style.color ='Red'
    this.innerHTML = 'X'
    click= true
}
function shadowoff(){
    if(click == false){
        this.innerHTML = ''
    }else{
        //pass
    }
}
/*
function gamestart(x){
    if(x=='Blue'){
        client('Blue')
        console.log('blueactivateds')
        console.log(x)
    }else{
        client('Red')
        console.log(x)
    }
}
        /*console.log(each_button)
    for (i=0;i<each_button.length;i++){//2개버튼에 줌
        each_button[i].addEventListener("click",whenclick)
        console.log(each_button[i])
        console.log(i)
    }
    //var yourColor = whenclick()
})

/*function shadowon(evt){
    if(el==true){
        evt.target.style.color = 'deepskyblue';
        evt.target.innerHTML = 'O'
    }else{
        //pass
    }
}
function shadowoff(evt){
    if(el==true){
        evt.target.innerHTML = ''
    }else{
        //pass
    }
}
function put(evt){
    if(el = true){
        evt.target.style.color = 'blue';
        evt.target.innerHTML = 'O';
        click = true;
    }else{
        //pass
    }
}
*/
/*document.addEventListener("DOMContentLoaded" , function(){
    var target = document.querySelectorAll('td')
    var i;
    for (i= 0;i<9;i++){
        target[i].addEventListener("mouseover",shadowon)
        target[i].addEventListener("mouseout",shadowoff)
        target[i].addEventListener("click",put)
    }
})
*/

/*function shadownon(evt){
    if(click == false){
        evt.cells.style.color = 'deepskyblue';
        evt.cells.innerHTML = 'O'
        console.log(cells[i])
    }else{
        //pass
    }
}
function shadowoff(evt){
    if(click == false){
        evt.cells.innerHTML = ''
    }
}
function put(evt){
    evt.cells.style.color = 'blue'
    evt.cells.innerHTML = 'O'
    click = true
}
function client(cl){
    var click = false
    var td = document.querySelectorAll('td')
    if(cl == 'Blue'){//컬러로 블루받았을때 클라이언트
        console.log(cl)//블루받을때 출력
        for(i=0;i<td.length;i++){
            td[i].addEventListener("click",function(){
                td[i].style.color = 'blue'
            })
        }
    }else{
        for(i=0;i<td.length;i++){
            td[i].addEventListener("mouseover",function(){//커서올리면 클릭안됬을때
                if(click == false){
                    td[i].style.color = 'Salmon'
                    td[i].innerHTML = 'X'
                }else{
                    //pass
                }
            })
            td[i].addEventListener("mouseout",function(){
                if(click == false){
                    td[i].innerHTML =''
                }else{
                    //pass
                }
            })
            td[i].addEventListener("click",function(){//클릭
                td[i].style.color = cl
                td[i].innerHTML = 'X'
                click = true
            })
        }
    }
    
}
function gamestart(x){
    if(x=='Blue'){
        client('Blue')
        console.log('blueactivateds')
        console.log(x)
    }else{
        client('Red')
        console.log(x)
    }
}
function whenclick(){
    if(this.className =='Blue'){
        var yourColor = 'Blue'
        console.log(yourColor)//블루면 블루 출력
    }else{
        var yourColor = 'Red'
        console.log(yourColor)
    }
    var trash = document.querySelector('.button');
    console.log(yourColor)//색깔 두번째 출력
    trash.remove();
    gamestart(yourColor)//색깔 인자로 넘김
}
document.addEventListener("DOMContentLoaded", function(){//여긴문제없는듯
    var tdtag = document.querySelectorAll('td')
    for (i=0;i<tdtag.length;i++){
        tdtag[i].addEventListener("mouseover",function(){
            tdtag[i].style.color = 'blue'
            tdtag[i].innerHTML = 'O'
        })
    }
}
*/}