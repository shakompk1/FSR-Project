let design = document.querySelectorAll('.servicesButton')[1];
let logoService = document.querySelector('.logoService img');
let serviceLogo = document.querySelectorAll('.serviceLogo');
let serviceName = document.querySelectorAll('.serviceName');


let webImages =['./src/img/html_pt.png','./src/img/hamster.jpg','./src/img/pes.jpg'];
let designImages =['./src/img/ps.png','./src/img/figma.png','./src/img/ae.jpg'];


webdevelopment.addEventListener('click',function(){
    serviceTypeChoise.classList.add('web');
    serviceTypeChoise.classList.remove('design');
    serviceName.forEach((el,i) =>{
       if(i===0) {
           priceBlock.innerHTML = webPrice[i];
           infoBlock.forEach(el => el.innerHTML = webText[i])
           el.classList.add('active');
       }
       else el.classList.remove('active');
    });
    logoService.src="./src/img/type.jpg";
    serviceLogo.forEach((img,i)=>{
        img.src = webImages[i];
    });
    restarAnimation();
});


design.addEventListener('click',function(){
    serviceTypeChoise.classList.add('design');
    serviceTypeChoise.classList.remove('web')
    logoService.src="./src/img/ps.png";
    serviceLogo.forEach((img,i)=>{
        img.src = designImages[i];
    });
    restarAnimation();
    serviceName.forEach((el,i) =>{
        if(i===0) {
            priceBlock.innerHTML = designPrice[i];
            infoBlock.forEach(el => el.innerHTML = designText[i])
            el.classList.add('active');
        }
        else el.classList.remove('active');
    });
});

serviceType.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        serviceType.forEach(el =>{
            el.classList.remove('selected');
        })
        logoService.src=`${serviceTypeChoise.classList.contains('design')?designImages[index]:webImages[index]}`;
        let count;
        let speed = 300;
        if(  index === 0){
            count = '100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.forEach(el => el.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`)
            console.log(infoBlock.innerHTML);
            button.classList.add('selected');
        }else if(index === 1){
            count = '0%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.forEach(el => el.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`)
            button.classList.add('selected');
        }else if(index === 2){
            count = '-100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.forEach(el => el.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`)
            button.classList.add('selected');
        }
        serviceName.forEach((el,i) =>{
            if(i===index) el.classList.add('active');
            else el.classList.remove('active');
        });
        const mediaQuery = window.matchMedia('(max-width: 480px)');
        serviceType.forEach((b,i)=>{
            if(i == 0){
                b.animate([
                    // keyframes
                    { },
                    { transform: `${mediaQuery.matches?`translate3D(${count},100%, 0)`:`translate3D(0, ${count}, 0)` }`}
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
                    { transform: `${mediaQuery.matches?`translate3D(${count},100%, 0)`:`translate3D(0, ${count}, 0)` }`}
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
                    { transform: `${mediaQuery.matches?`translate3D(${count},100%, 0)`:`translate3D(0, ${count}, 0)` }`}
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
    let width = screen.width
    let speed = 300;
    let count = '100%';
    const mediaQuery = window.matchMedia('(max-width: 480px)');
    serviceType.forEach((b,i)=>{
        b.animate([
            // keyframes
            { },
            { transform: `${mediaQuery.matches?`translate3D(${count},100%, 0)`:`translate3D(0, ${count}, 0)` }`}
        ], {
            // timing options
            duration: speed,
            fill: 'forwards'
        });
    });
}

getData();


