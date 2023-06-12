let text=document.getElementById("text");
let buttons=document.querySelectorAll(".btn");
let btnegale=document.querySelector('.btnegale');
let btndele=document.querySelector('.btndele');


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(event)=> {
        text.value+=event.target.value;
    }
    
)
}

btnegale.addEventListener('click', ()=> {
    text.value=eval(text.value) ;
}
)
btndele.addEventListener('click',()=>{
    text.value='';
}
)