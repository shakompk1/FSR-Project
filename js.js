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

serviceType.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let count;
        if(  index == 0){
            count = '100%';
        }else if(index == 1){
            count = '0%';
        }else if(index == 2){
            count = '-100%';
        }
            serviceType.forEach((b,i)=>{
                if(i==0){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: 500,
                        fill: 'forwards'
                    });
                }
                if(i==1){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: 500,
                        fill: 'forwards'
                    }); 
                }
                if(i==2){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: 500,
                        fill: 'forwards'
                    }); 
                }
            });        
    });
});