let banner = document.querySelector('.backg');
let images = ['banner2.jpg', 'banner3.jpg', 'banner4.jpg'];
let i=0;

function prev(){
    if(i <= 0) i = images.length;
    i--;  
    return setImg();
}

function next(){ 
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg(0);
}

function setImg(){
    return banner.setAttribute('images/' + images[i]);
}