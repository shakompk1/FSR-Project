let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let design = document.querySelectorAll('.servicesButton')[1];
let serviceType = document.querySelectorAll('.serviceType');
let serviceTypeChoise = document.querySelector('.serviceTypeChoise');
let logoService = document.querySelector('.logoService img');
let serviceLogo = document.querySelectorAll('.serviceLogo');
let serviceName = document.querySelectorAll('.serviceName');
let languages = document.querySelectorAll('.lang');
let navMenu = document.querySelectorAll('nav a');
let titles = document.querySelectorAll('.title');
let priceBlock = document.querySelector('.price_value');
let infoBlock = document.querySelector('.info_value');
let webImages =['img/html_pt.png','img/hamster.jpg','img/pes.jpg'];
let data;
let webText = [];
let webPrice  = [];
let designText = [];
let designPrice = [];
let designImages =['img/ps.png','img/figma.png','img/ae.jpg'];


 const getData = async()=>{
    let response = await fetch('lang.json');
    data = await response.json();
     webText = data.az.servicesInfoWebText;
     webPrice = data.az.servicesInfoWebPrice;
     designText = data.az.servicesInfoDesignText;
     designPrice = data.az.servicesInfoDesignPrice;
     navMenu.forEach((el,index)=>{
         el.innerHTML = '';
        el.innerHTML = data.az.nav[index];
     });
     titles.forEach((el,index)=>{
         el.innerHTML = '';
        el.innerHTML = data.az.titles[index];
     });
}

languages.forEach((el,index) =>{
    getData();
   el.addEventListener('click', ()=>{
       if(index===0){
           webText = data.az.servicesInfoWebText;
           webPrice = data.az.servicesInfoWebPrice;
           designText = data.az.servicesInfoDesignText;
           designPrice = data.az.servicesInfoDesignPrice;
           navMenu.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.az.nav[index];
           });
           titles.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.az.titles[index];
           });
       }else
       if(index===1){
           webText = data.ru.servicesInfoWebText;
           webPrice = data.ru.servicesInfoWebPrice;
           designText = data.ru.servicesInfoDesignText;
           designPrice = data.ru.servicesInfoDesignPrice;
           serviceType.forEach((el,i) =>{
               console.log(i);
           });
           navMenu.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.ru.nav[index];
           });
           titles.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.ru.titles[index];
           });
       }else
       if(index===2){
           webText = data.en.servicesInfoWebText;
           webPrice = data.en.servicesInfoWebPrice;
           designText = data.en.servicesInfoDesignText;
           designPrice = data.en.servicesInfoDesignPrice;
           navMenu.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.en.nav[index];
           });
           titles.forEach((el,index)=>{
               el.innerHTML = '';
               el.innerHTML = data.en.titles[index];
           });
       }
   });

});
webdevelopment.addEventListener('click',function(){
    serviceTypeChoise.classList.add('web');
    serviceTypeChoise.classList.remove('design');
    serviceName.forEach((el,i) =>{
       if(i===0) {
           priceBlock.innerHTML = webPrice[i];
           infoBlock.innerHTML = webText[i];
           el.classList.add('active');
       }
       else el.classList.remove('active');
    });
    logoService.src="img/type.jpg";
    serviceLogo.forEach((img,i)=>{
        img.src = webImages[i];
    });
    restarAnimation();
});

design.addEventListener('click',function(){
    serviceTypeChoise.classList.add('design');
    serviceTypeChoise.classList.remove('web')
    logoService.src="img/ps.png";
    serviceLogo.forEach((img,i)=>{
        img.src = designImages[i];
    });
    restarAnimation();
    serviceName.forEach((el,i) =>{
        if(i===0) {
            priceBlock.innerHTML = designPrice[i];
            infoBlock.innerHTML = designText[i];
            el.classList.add('active');
        }
        else el.classList.remove('active');
    });
});

serviceType.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        logoService.src=`${serviceTypeChoise.classList.contains('design')?designImages[index]:webImages[index]}`;
        let count;
        let speed = 300;
        if(  index === 0){
            count = '100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
            
        }else if(index === 1){
            count = '0%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
        }else if(index === 2){
            count = '-100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
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