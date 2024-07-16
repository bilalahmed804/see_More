let para = document.querySelector("#para");
// console.log(para);

let readMore = document.querySelector("#readMore");


let moreText  = `ipsum dolor sit amet consectetur, adipisicing elit. Magni mollitia dolorem, placeat quis voluptas,
            quibusdam pariatur et sit natus nihil nam voluptatibus? Eaque provident excepturi et praesentium saepe,
            consectetur voluptatem!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni mollitia dolorem, placeat quis voluptas,
            quibusdam pariatur et sit natus nihil nam voluptatibus? Eaque provident excepturi et praesentium saepe,
            consectetur voluptatem`


readMore.addEventListener("click",function(event){

    if(event.target.innerHTML ==  "see Less"){
        para.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni mollitia dolorem, placeat quis voluptas,
        quibusdam pariatur et sit natus nihil nam voluptatibus? Eaque provident excepturi et praesentium saepe,
        consectetur voluptatem!`
        
        readMore.innerHTML = "ReadMore";
    }else{
        para.innerHTML += moreText
        
        readMore.innerHTML = "see Less"
        
    }
    // let randomColor = Math.ceil(Math.random()*16777215);

    // let colorNumber = "#" + randomColor.toString(16);

    // document.body.style.backgroundColor = colorNumber
    
    
})

