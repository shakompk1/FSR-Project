let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let design = document.querySelectorAll('.servicesButton')[1];
let serviceInfo = document.querySelector('.serviceInfo');
let serviceType = document.querySelectorAll('.serviceType');
let logoService = document.querySelector('.logoService img');
let serviceLogo = document.querySelectorAll('.serviceLogo');

let text = [
    ["hello",'webdevelopment'],
    ["hello",'Design']
];

webdevelopment.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    for (let i = 0; i < text[0].length; i++) {
        serviceInfo.innerHTML += " " + text[0][i];        
    }
    logoService.src="img/type.jpg";
    serviceLogo.forEach((img,i)=>{
        img.src = 'img/type.jpg';
    });
});

design.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    for (let i = 0; i < text[1].length; i++) {
        serviceInfo.innerHTML += " " + text[1][i];        
    }
    logoService.src="img/dog.jpg";
    serviceLogo.forEach((img,i)=>{
        img.src = 'img/dog  .jpg';
    });

});

serviceType.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let count;
        let speed = 300;
        if(  index == 0){
            count = '100%';
        }else if(index == 1){
            count = '0%';
        }else if(index == 2){
            count = '-100%';
        }





        //animation
            serviceType.forEach((b,i)=>{
                if(i == 0){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: speed,
                        fill: 'forwards'
                    });
                }
                if(i == 1){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: speed,
                        fill: 'forwards'
                    }); 
                }
                if(i == 2){
                    b.animate([
                        // keyframes
                        { }, 
                        { transform: `translate3D(0, ${count}, 0)` }
                    ], {
                        // timing options
                        duration: speed,
                        fill: 'forwards'
                    }); 
                }
            });        
    });
});