let leftButton = document.querySelector('.portfolioMainBlockLeftButton i');
let rightButton = document.querySelector('.portfolioMainBlockRightButton i');
let mainBlock = document.querySelector('.portfolioMainBlockInfo');
let deviceChose = document.querySelectorAll('.choseDevice button');
let porfolio = document.querySelector('.porfolioShortinfo');
let tablet =  document.querySelector('.tablet');
let smartphone =  document.querySelector('.smartphone');
let laptop = document.querySelector('.laptop');
let infoArr = [{id:1 , slideBlockImg:'./src/img/pes.jpg' , decstopVersion :'./src/img/pes.jpg'},{id:2 , slideBlockImg:'./src/img/pes.jpg', decstopVersion :'./src/img/ae.jpg'},{id:3 , slideBlockImg:'./src/img/type.jpg',decstopVersion :'./src/img/pes.jpg'},{id:4 , slideBlockImg:'./src/img/ps.png',decstopVersion :'./src/img/type.jpg'},{id:5 , slideBlockImg:'./src/img/ae.jpg',decstopVersion :'./src/img/pes.jpg'},{id:6 , slideBlockImg:'./src/img/pes.jpg',decstopVersion :'./src/img/pes.jpg'},{id:7 , slideBlockImg:'./src/img/type.jpg',decstopVersion :'./src/img/pes.jpg'},{id:8 , slideBlockImg:'./src/img/dog.jpg',decstopVersion :'./src/img/pes.jpg'},{id:9 , slideBlockImg:'./src/img/hamster.jpg',decstopVersion :'./src/img/pes.jpg'},{id:10 , slideBlockImg:'./src/img/figma.png',decstopVersion :'./src/img/pes.jpg'},{id:11 , slideBlockImg:'./src/img/ae.jpg',decstopVersion :'./src/img/pes.jpg'},{id:12 , slideBlockImg:'./src/img/ae.jpg',decstopVersion :'img/pes.jpg'},{id:13 , slideBlockImg:'./src/img/ae.jpg',decstopVersion :'./src/img/pes.jpg'},{id:14 , slideBlockImg:'./src/img/ae.jpg',decstopVersion :'./src/img/pes.jpg'}];

let circle = setInterval(() => {
    moveElement()
}, 5000);

let divArr = [];
let divBlockArr = []
let positionArr = [];
let transform = 0;
let canPushButton = true;
let width = screen.width;

leftButton.addEventListener('click',changePortfolioBlockPosition);
rightButton.addEventListener('click',changePortfolioBlockPosition);

function changePortfolioBlockPosition(index){
    if(index.path[0].classList.contains('fa-chevron-left')){
        clearInterval(circle);
        moveElement(true);
    }else{
        clearInterval(circle);
        moveElement(false);
    } 
}

deviceChose.forEach((element,index )=> {
    element.addEventListener('click',()=>{
        tablet.classList.remove('activeDevice');
        smartphone.classList.remove('activeDevice');
        laptop.classList.remove('activeDevice');
        if(index == 0){
            smartphone.classList.add('activeDevice');
        }else if(index == 1){
            laptop.classList.add('activeDevice');
        }else if(index ==2){
            tablet.classList.add('activeDevice');
        }
    })
});
function moveElement(status){
    if(canPushButton){
        canPushButton = false;
        transform = status?-168:168;
        divArr.forEach((element ,index)=>{
            element.animate([
                { left : `${+positionArr[index]}px`}, 
                { left: `${+positionArr[index] + transform}px` }
            ], {
                duration: 500,
                fill: 'forwards'
            });
        });
        setTimeout(()=>{
            AddElement(status);
            DeleteElement(status);  
            canPushButton  = true;
        },500);
    }
}

function AddElementToHtml(status){
    positionArr = [];
    porfolio.innerHTML = "";
    let position =status?-316: -148;
    for (let i = 0; i < 11; i++) {
        if(i != 0){
            position += 168;
        }else if(status && i==0){
            position += 168
        }
        for (let i = 0; i < divArr.length; i++) {
            divArr[i].classList.remove('activePortfolio');
        }
        divArr[1].classList.add('activePortfolio');
        positionArr.push(position);
        divArr[i].style.left =`${position}px`;
        divArr[i].style.transform = `translate3D(0, 0, 0)`;
        porfolio.append(divArr[i]);  
    }
    ShowImgMainBlock();
}

function AddElement(status){
    if(status){
        divArr.push(divArr[0]);
    }else{
        divArr.unshift(divArr[divArr.length-1]);
    }
}

function DeleteElement(status){
    if(status){
        divArr.shift();
    }else{
        divArr.pop();
    }
    AddElementToHtml(status)
}

function CreatElement(){
    for(let i = 0;i<infoArr.length;i++){
        let img = document.createElement('img');
        img.src = `${infoArr[i].slideBlockImg}`;
        img.name =`${infoArr[i].id}`
        img.classList.add('potfolioShortBlockInfo');
        divArr.push(img);
    }
    AddElementToHtml();
}

function ShowImgMainBlock(){
    tablet.innerHTML ="";
    smartphone.innerHTML ="";
    laptop.innerHTML ="";
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    for (let i = 0; i < infoArr.length; i++) {
        if(divArr[1].name == infoArr[i].id){    
            img1.src = infoArr[i].decstopVersion;
            img2.src = infoArr[i].decstopVersion;
            img3.src = infoArr[i].decstopVersion;
        }
    }
    tablet.append(img1);
    smartphone.append(img2);
    laptop.append(img3);
}

CreatElement();

