let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let design = document.querySelectorAll('.servicesButton')[1];
let serviceType = document.querySelectorAll('.serviceType');
let contactUsButton = document.querySelector('.contact_us button');
let contactUsText= document.querySelector('.contact_us p');
let contactUsInput= document.querySelectorAll('.form input');
let contactUsTextArea= document.querySelector('.form textarea');
let serviceTypeChoise = document.querySelector('.serviceTypeChoise');
let logoService = document.querySelector('.logoService img');
let serviceLogo = document.querySelectorAll('.serviceLogo');
let serviceName = document.querySelectorAll('.serviceName');
let navMenu = document.querySelectorAll('nav a');
let titles = document.querySelectorAll('.title');
let priceBlock = document.querySelector('.price_value');
let infoBlock = document.querySelector('.info_value');
let webImages =['img/html_pt.png','img/hamster.jpg','img/pes.jpg'];

let webText = [
    "1 bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir.",
    "2 bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir.",
    "3 bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir."
];
let webPrice  = [
    "100 AZN",
    "200 AZN",
    "300 AZN"
];
let designText = [
    "1 Design bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir.",
    "2 Design bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir.",
    "3 Design bizim işimiz yalnız web-dizayndan ibarət deyil. bura 360° digital xidmət agentliyidir. layihələrimizdə strategiya,təcrübəsi, dizayn, proqram, sosial media və seo komandaları ortaya mükəmməl iş çıxarmaq üçün vahid orqan kimi işləyir. veb-dizayn yüksək səviyyəli işlərimizdən yalnız biridir."
];
let designPrice = [
    "500 AZN",
    "600 AZN",
    "700 AZN"
];
let designImages =['img/ps.png','img/figma.png','img/ae.jpg'];


 const getData = async()=>{
     let route = window.location.search;
     let test = await fetch(`http://localhost:3000/language${route}`);
     console.log(route);
     let langBase = await test.json();

     let innerText = langBase.comment;
     let BigInnerText = langBase.bigWord;
     webText = langBase.servicesInfoWebText;
     webPrice = langBase.servicesInfoWebPrice;
     designText = langBase.servicesInfoDesignText;
     designPrice = langBase.servicesInfoDesignPrice;
     contactUsButton.innerHTML = langBase.contact;
     contactUsText.innerHTML =`<span>${BigInnerText}</span><br/>${innerText}`;
     webdevelopment.innerHTML = langBase.services[0];
     design.innerHTML = langBase.services[1];
     contactUsTextArea.placeholder =langBase.textArea;
     navMenu.forEach((el,index)=>{
         el.innerHTML = '';
         el.innerHTML =langBase.nav[index];
     });
     titles.forEach((el,index)=>{
        el.innerHTML = '';
        el.innerHTML = langBase.titles[index];
     });
     contactUsInput.forEach((el,index) =>{
         el.placeholder = langBase.placeholders[index];
     })
     serviceType.forEach((el,index)=>{
         if(  el.classList.contains('selected')){
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
         }
     });
}
getData();

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
        serviceType.forEach(el =>{
            el.classList.remove('selected');
        })
        logoService.src=`${serviceTypeChoise.classList.contains('design')?designImages[index]:webImages[index]}`;
        let count;
        let speed = 300;
        if(  index === 0){
            count = '100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
            button.classList.add('selected');
        }else if(index === 1){
            count = '0%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
            button.classList.add('selected');
        }else if(index === 2){
            count = '-100%';
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`;
            button.classList.add('selected');
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