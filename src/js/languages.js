let serviceTypeChoise = document.querySelector('.serviceTypeChoise');
let navMenu = document.querySelectorAll('nav a');
let titles = document.querySelectorAll('.title');
let contactUsTextArea= document.querySelector('.form textarea');
let webdevelopment = document.querySelectorAll('.servicesButton')[0];
let contactUsButton = document.querySelector('.contact_us button');
let contactUsText= document.querySelector('.contact_us p');
let priceBlock = document.querySelector('.price_value');
let infoBlock = document.querySelectorAll('.info_value');
let serviceType = document.querySelectorAll('.serviceType');
let contactUsInput= document.querySelectorAll('.form input');


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

const getData = async()=>{
    let route = window.location.search;
    let test = await fetch(`/language${route}`);
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
        if(index === 0){
            el.innerHTML = `<div class="emptyDivOne"></div><div class="emptyDivTwo"></div>${langBase.titles[index]}`;
        }
        else if(index ===1){
            el.innerHTML = `<div class="emptyDivThree"></div>${langBase.titles[index]}`;
        }
    });
    contactUsInput.forEach((el,index) =>{
        el.placeholder = langBase.placeholders[index];
    })

    serviceType.forEach((el,index)=>{
        if(  el.classList.contains('selected')){
            priceBlock.innerHTML = `${serviceTypeChoise.classList.contains('design')?designPrice[index]:webPrice[index]}`;
            infoBlock.forEach(el => el.innerHTML = `${serviceTypeChoise.classList.contains('design')?designText[index]:webText[index]}`)
        }
    });
}