// 轮播图
let imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let topAfter = document.querySelector('.top_after');
let img = document.querySelector('.slides li a img');
let prev = document.querySelector('.slides_direction li .slides_pre');
let next = document.querySelector('.slides_direction li .slides_next');
let liNodes = document.querySelectorAll('.banner-btn li');
let count = 0;

function cutImg(){
    img.src = './img/' + imgArr[count];
    for(let i = 0; i < liNodes.length; i++){
        liNodes[i].className = '';
    }
    liNodes[count].className = 'active';
}

let timer = setInterval(function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();
}, 3000);

next.onclick = function(){
    count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
    cutImg();

}

prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutImg();
}

topAfter.onmouseover = function(){
    clearInterval(timer);
}

topAfter.onmouseout = function(){
    timer = setInterval(function(){
        count++;
        if(count > imgArr.length - 1){
            count = 0;
        }
        cutImg();
    }, 3000);
}

for(let i = 0; i < liNodes.length; i++){
    liNodes[i].onmouseover = () => {
        count = i;
        cutImg();
    }
}