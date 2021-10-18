let deductBtnArr = document.getElementsByClassName('minus-btn');
let addButtonArr = document.getElementsByClassName('plus-btn');

for(let deductBtn of deductBtnArr){
    deductBtn.onclick = function(){
        let currentInputBox = deductBtn.nextElementSibling;
        currentInputBox.value =  currentInputBox.value  -1;
        somme ()
    }
}

for(let addButton of addButtonArr){
    addButton.onclick = () => {
        let currentInputBox = addButton.previousElementSibling;
        currentInputBox.value =  parseInt(currentInputBox.value) + 1;
        somme ()
    }
}





var like1=document.getElementById("like1")

like1.addEventListener('click',function(){
    if(like1.style.color=='black'){
        like1.style.color='red'
    }else{
        like1.style.color="black";

    }

})
 

var like2=document.getElementById("like2")

like2.addEventListener('click',function(){
    if(like2.style.color=='black'){
        like2.style.color='red'
    }else{
        like2.style.color="black";

    }

})



var like3=document.getElementById("like3")

like3.addEventListener('click',function(){
    if(like3.style.color=='black'){
        like3.style.color='red'
    }else{
        like3.style.color="black";

    }

})

var del1=document.getElementById("del")
del1.addEventListener('click',function(){
    var parent = this.parentNode
    parent.remove()
})


var del2=document.getElementById("dele")
del2.addEventListener('click',function(){
    var parent = this.parentNode
    parent.remove()
})


var del3=document.getElementById("delet")
del3.addEventListener('click',function(){
    var parent = this.parentNode
    parent.remove()
})

var quant1=document.getElementById("quant1")
var price1=document.getElementById("price1")
var finalPrice=document.getElementById("finalPrice")

function somme (){
    var somme= quant1.value*price1.innerHTML

     finalPrice.value= somme
}

var quant2=document.getElementById("quant2")
var price2=document.getElementById("price2")
var finalPrice=document.getElementById("finalPrice")

function somme (){
    var somme= quant2.value*price2.innerHTML

     finalPrice.value= somme
}

var quant3=document.getElementById("quant3")
var price3=document.getElementById("price3")
var finalPrice=document.getElementById("finalPrice")

function somme (){
    var somme= quant3.value*price3.innerHTML

     finalPrice.value= somme
}