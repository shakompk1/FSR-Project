let leftButton = document.querySelector('.portfolioMainBlockLeftButton');
let rightButton = document.querySelector('.portfolioMainBlockRightButton');
let porfolioShortinfo = document.querySelector('.porfolioShortinfo');
let infoArr = ['img/ae.jpg','img/pes.jpg','img/type.jpg','img/ps.png','img/ae.jpg',]
let transition = 0;
for(let i = 0;i<infoArr.length;i++){
    let img = document.createElement('img');
    img.src = `${infoArr[i]}`;
    img.classList.add('potfolioShortBlockInfo')
    porfolioShortinfo.append(img);

}
leftButton.addEventListener('click',changePortfolioBlock);
rightButton.addEventListener('click',changePortfolioBlock);


function changePortfolioBlock(index){
    porfolioShortinfo.innerHTML = "";
    for(let i = 0;i<infoArr.length;i++){
        let img = document.createElement('img');
        img.src = `${infoArr[i]}`;
        img.classList.add('potfolioShortBlockInfo');
        transform: `translate3D( ${transition}%,0, 0)`;
        porfolioShortinfo.append(img);    
    }
    let potfolioShortBlockInfo = document.querySelectorAll('.potfolioShortBlockInfo');   
    if(index.path[0].classList.contains('portfolioMainBlockLeftButton')){
        transition += -100;
    }else{
        transition += 100;
    } 

    countPositionMainblock(potfolioShortBlockInfo[potfolioShortBlockInfo.length-1]);
    // if(countPositionMainblock(porfolioShortinfo) > countPositionMainblock(potfolioShortBlockInfo[potfolioShortBlockInfo.length-1])){
        
    // }
    potfolioShortBlockInfo.forEach(element => {
        element.animate([
            // keyframes
            { }, 
            { transform: `translate3D( ${transition}%,0, 0)` }
        ], {
            // timing options
            duration: 1000,
            fill: 'forwards'
        });
    });
}

function countPositionMainblock(element){
  console.log(element.offsetLeft) ;
}