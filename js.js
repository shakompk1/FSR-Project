let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let design = document.querySelectorAll('.servicesButton')[1];
let serviceInfo = document.querySelector('.serviceInfo');
let serviceType = document.querySelectorAll('.serviceType');
let serviceTypeChoise = document.querySelector('.serviceTypeChoise');
let serviceTypeImg = document.querySelectorAll('.serviceType img');
let logoService = document.querySelector('.logoService img');
let serviceLogo = document.querySelectorAll('.serviceLogo');
let serviceName = document.querySelectorAll('.serviceName');
let priceBlock = document.querySelector('.price_value');
let infoBlock = document.querySelector('.info_value');
let webImages =['img/html_pt.png','img/hamster.jpg','img/pes.jpg'];
let designImages =['img/ps.png','img/figma.png','img/ae.jpg'];
let text = [
    ["hello",'webdevelopment'],
    ["hello",'Design']
];


webdevelopment.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    serviceTypeChoise.classList.add('web');
    serviceTypeChoise.classList.remove('design');
    for (let i = 0; i < text[0].length; i++) {
        serviceInfo.innerHTML += " " + text[0][i];        
    }
    logoService.src="img/type.jpg";
    serviceLogo.forEach((img,i)=>{
        img.src = webImages[i];
    });
    restarAnimation();
});

design.addEventListener('click',function(){
    serviceInfo.innerHTML = '';
    serviceTypeChoise.classList.add('design');
    serviceTypeChoise.classList.remove('web')
    for (let i = 0; i < text[1].length; i++) {
        serviceInfo.innerHTML += " " + text[1][i];        
    }
    logoService.src="img/ps.png";
    serviceLogo.forEach((img,i)=>{
        img.src = designImages[i];
    });
    restarAnimation();
});

serviceType.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        let img = button.querySelector('img');
        let image = img.getAttribute('src');
        logoService.src=`${serviceTypeChoise.classList.contains('design')?designImages[index]:webImages[index]}`;
        let count;
        let speed = 300;
        if(  index == 0){
            count = '100%';
            priceBlock.innerHTML = "$100"; 
            infoBlock.innerHTML = "WE BELIEVE IN FAIR WORK FOR FAIR PRICE AND HONOUR OUR ARGREEMENTS WITH EVERY CLIENT. OUR REPUTATION GROWS WITH EACH  SATISFIED CUSTOMER AND WE TREASURE BOTH OF THEM.";  
            
        }else if(index == 1){
            count = '0%';
            priceBlock.innerHTML = "$200"; 
            infoBlock.innerHTML = "WE BELIEVE IN FAIR WORK FOR FAIR PRICE AND HONOUR OUR ARGREEMENTS WITH EVERY CLIENT. OUR REPUTATION GROWS WITH EACH  SATISFIED CUSTOMER AND WE TREASURE BOTH OF THEM.";  
        }else if(index == 2){
            count = '-100%';
            priceBlock.innerHTML = "$300"; 
            infoBlock.innerHTML = "WE BELIEVE IN FAIR WORK FOR FAIR PRICE AND HONOUR OUR ARGREEMENTS WITH EVERY CLIENT. OUR REPUTATION GROWS WITH EACH  SATISFIED CUSTOMER AND WE TREASURE BOTH OF THEM.";  
        }
        serviceName.forEach((el,i) =>{
          if(i===index) el.classList.add('active');
          else el.classList.remove('active');       
        });
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
function restarAnimation(){
    let speed = 300;
    let count = '100%';
    serviceType.forEach((b,i)=>{
        b.animate([
            // keyframes
            { }, 
            { transform: `translate3D(0, ${count}, 0)` }
        ], {
            // timing options
            duration: speed,
            fill: 'forwards'
        }); 
    });
}