let leftButton = document.querySelector('.portfolioMainBlockLeftButton i');
let rightButton = document.querySelector('.portfolioMainBlockRightButton i');
let mainBlock = document.querySelector('.portfolioMainBlockInfo');
let porfolio = document.querySelector('.porfolioShortinfo');
let infoArr = ['img/ae.jpg','img/pes.jpg','img/type.jpg','img/ps.png','img/ae.jpg','img/pes.jpg','img/type.jpg','img/dog.jpg','img/hamster.jpg','img/figma.png','img/ae.jpg','img/ae.jpg','img/ae.jpg','img/ae.jpg'];

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
        moveElement(false);
    }else{
        clearInterval(circle);
        moveElement(true);
    } 
}


function moveElement(status){
    if(canPushButton){
        canPushButton = false;
        transform = status?-168:168;
        divArr.forEach((element ,index)=>{
            element.animate([
                { left : `${positionArr[index]}px`}, 
                { left: `${positionArr[index] + transform}px` }
            ], {
                duration: 200,
                fill: 'forwards'
            });
        });
        setTimeout(()=>{
            AddElement(status);
            DeleteElement(status);  
            canPushButton  = true;
        },200);
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
        img.src = `${infoArr[i]}`;
        img.classList.add('potfolioShortBlockInfo');
        divArr.push(img);
    }
    AddElementToHtml();
}

function ShowImgMainBlock(){
    mainBlock.innerHTML ="";
    let img = document.createElement('img');
    img.src = divArr[1].src;
    mainBlock.append(img);
}
CreatElement();