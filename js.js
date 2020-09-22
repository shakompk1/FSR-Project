let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let design = document.querySelectorAll('.servicesButton')[1];
let serviceInfo = document.querySelector('.serviceInfo');
let serviceType = document.querySelectorAll('.serviceType');

let text = [
    ["hello",'webdevelopment'],
    ["hello",'webdevelopment']
];

webdevelopment.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    for (let i = 0; i < text[0].length; i++) {
        serviceInfo.innerHTML += " " + text[0][i];        
    }
});

design.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    for (let i = 0; i < text[1].length; i++) {
        serviceInfo.innerHTML += " " + text[1][i];        
    }
});

serviceType.forEach((button , index) =>{
    button.addEventListener('click',()=>{
        if(index == 0){
            serviceType.forEach((b,i)=>{
                if(i==0){
                    Animation(200,b);
                }
            });
        }
        if(index == 1){
            serviceType.forEach((b,i)=>{
                if(i==0){
                    b.style.margin = `-50px 0 0`;
                }
            });
        }
        if(index == 2){
            serviceType.forEach((b,i)=>{
                if(i==0){
                    b.style.margin = `-200px 0 0`;
                }
            });
        }        
    });
});
    
// function Animation(px,button){
//     let marginTop = window.getComputedStyle(button, null).getPropertyValue("margin-top");
//     marginTop = marginTop.replace(/[^\d]/g, "");
//     let start  = setInterval(()=>{
//         if(marginTop < px){
//             marginTop = +marginTop + 1;
//             button.style.margin = `${marginTop}px 0 0`
//         }else{
//             clearInterval(start)
//         }
//     },10);
// }