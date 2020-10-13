let leftButton = document.querySelector('.portfolioMainBlockLeftButton');
let rightButton = document.querySelector('.portfolioMainBlockRightButton');
let porfolio = document.querySelector('.porfolioShortinfo');
let infoArr = ['img/ae.jpg','img/pes.jpg','img/type.jpg','img/ps.png','img/ae.jpg','img/ae.jpg','img/ae.jpg'];
let divArr = [];
let transform = 0;
let position = 0;

leftButton.addEventListener('click',changePortfolioBlockPosition);
rightButton.addEventListener('click',changePortfolioBlockPosition);


function changePortfolioBlockPosition(index){
    if(index.path[0].classList.contains('portfolioMainBlockLeftButton')){
        moveElement(false);
    }else{
        moveElement(true);
    } 
}

function moveElement(pos){
    transform += pos?200:-200
    let potfolioShortBlockInfo = document.querySelectorAll('.potfolioShortBlockInfo');
    potfolioShortBlockInfo.forEach((element ,index)=>{
        // setInterval(()=>{
        //     element.style.left = `${PositionLeft(element) + 1}px`
        // },1000)
        // element.animate([
        //     { }, 
        //     { transform: `translate3D(${transform}%, 0, 0)` }
        // ], {
        //     duration: 1000,
        //     fill: 'forwards'
        // });
    });
    DeleteElement(potfolioShortBlockInfo[potfolioShortBlockInfo.length -1]);
    AddElement();
}
function AddElementToHHtml(){
    for (let i = 0; i < 7; i++) {
        porfolio.append(divArr[i]);  
    }
}
function AddElement(){
    porfolio.prepend(divArr[6]);
}

function DeleteElement(element){
    element.remove();
}

function CreatElement(){
    porfolio.innerHTML = "";
    for(let i = 0;i<infoArr.length;i++){
        if(i != 0){
            position += 20;
        }
        let img = document.createElement('img');
        img.src = `${infoArr[i]}`;
        img.classList.add('potfolioShortBlockInfo');
        img.style.left = `${position}%`
        divArr.push(img);
    }
}

function PositionLeft(element){
    return element.offsetLeft;
}
function PositionRight(element){
    return element.offsetLeft + element.offsetWidth;
}

CreatElement();
AddElementToHHtml();